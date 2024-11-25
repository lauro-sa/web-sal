// PFI | FULL STACK AVANZADO - Consigna de trabajo final integrador.
// Este archivo implementa la configuración del servidor y las operaciones básicas de CRUD para usuarios, 
// así como el manejo de sesiones y autenticación, cumpliendo con las consignas del trabajo final integrador.

import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import admin from "firebase-admin";
import "dotenv/config"; // Carga las variables de entorno desde el archivo .env

// Configuración inicial de Firebase Admin SDK usando variables de entorno para seguridad
const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.FIREBASE_CLIENT_EMAIL}`,
};

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  console.log("Firebase Admin inicializado correctamente");
} catch (error) {
  console.error("Error inicializando Firebase Admin:", error);
}

// Inicialización de la base de datos Firestore
const db = admin.firestore();

// Configuración de la aplicación Express
const app = express();
const PORT = process.env.PORT || 3002;
const SECRET_KEY = process.env.SECRET_KEY || "tu_secreto"; // Clave secreta para JWT utilizada en la autenticación

// Middlewares
app.use(cors());
app.use(express.json());

// Endpoint para registrar un nuevo usuario
app.post("/api/register", async (req, res) => {
  try {
    const { username, password, nombreCompleto, email } = req.body;

    // Validación de los datos recibidos para cumplir con las prácticas de entrada segura
    if (!username || !password || !nombreCompleto || !email) {
      return res.status(400).json({ success: false, error: "Faltan datos" });
    }

    // Verificación de la existencia previa del usuario para evitar duplicados
    const userRef = db.collection("users").doc(username);
    const doc = await userRef.get();

    if (doc.exists) {
      return res.status(400).json({ success: false, error: "El usuario ya existe" });
    }

    // Encriptación de la contraseña para la seguridad de los datos del usuario
    const hashedPassword = await bcrypt.hash(password, 10);
    await userRef.set({
      username,
      password: hashedPassword,
      nombreCompleto,
      email,
      sesionActiva01: null,
      sesionActiva02: null,
    });

    res.status(201).json({ success: true, message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ success: false, error: "Error al registrar el usuario" });
  }
});

// Endpoint para iniciar sesión
app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validación de datos completos para iniciar sesión
    if (!username || !password) {
      return res.status(400).json({ success: false, error: "Faltan datos" });
    }

    const userRef = db.collection("users").doc(username);
    const doc = await userRef.get();

    if (!doc.exists) {
      return res.status(400).json({ success: false, error: "Usuario no encontrado" });
    }

    const user = doc.data();

    // Verificación de la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, error: "Contraseña incorrecta" });
    }

    // Actualización de la información de la última sesión activa
    const lastSession = user.sesionActiva01 || "Primera vez iniciando sesión";
    const newSessionTime = new Date().toISOString();
    await userRef.update({
      sesionActiva01: user.sesionActiva02 || lastSession,
      sesionActiva02: newSessionTime,
    });

    // Creación del token JWT para la sesión
    res.json({
      success: true,
      token: jwt.sign(
        { username, nombreCompleto: user.nombreCompleto, email: user.email },
        SECRET_KEY,
        { expiresIn: "1h" }
      ),
      user: {
        nombreCompleto: user.nombreCompleto,
        email: user.email,
        lastActive: lastSession,
      },
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ success: false, error: "Error al iniciar sesión" });
  }
});

// Middleware para autenticar el token JWT y asegurar el acceso a rutas protegidas
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, error: "Acceso denegado. Token no proporcionado" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, error: "Token inválido o expirado" });
    }
    req.user = user; // Adjuntar los datos del usuario al request para uso en rutas protegidas
    next();
  });
}

// Endpoint para obtener noticias protegidas (requiere autenticación)
app.get("/api/noticias", authenticateToken, async (req, res) => {
  const keywords = "Apple OR Android OR Windows OR programación OR PC OR iPhone OR JavaScript OR Python OR Java OR desarrollo OR código OR software";
  const lastWeekDate = getLastWeekDate();
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
    keywords)}&language=es&from=${lastWeekDate}&pageSize=20&apiKey=${process.env.API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(500).json({
        success: false,
        error: "Error al recuperar las noticias de tecnología",
      });
    }
    const data = await response.json();
    res.status(200).json({ success: true, articles: data.articles });
  } catch (error) {
    console.error("Error al obtener noticias:", error);
    res.status(500).json({
      success: false,
      error: "Error al recuperar las noticias de tecnología",
    });
  }
});

// Iniciar el servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Helper para calcular la fecha de hace una semana
function getLastWeekDate() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toISOString().split("T")[0];
}
