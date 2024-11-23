// Importación de módulos necesarios
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import admin from "firebase-admin";

// Inicializar Firebase Admin SDK con la configuración del servicio
import serviceAccount from "./firebaseConfig.json" assert { type: "json" };

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
const SECRET_KEY = process.env.SECRET_KEY || "tu_secreto"; // Clave secreta para JWT

// Middlewares
app.use(cors());
app.use(express.json());

// Endpoint para registrar un nuevo usuario
app.post("/api/register", async (req, res) => {
  try {
    const { username, password, nombreCompleto, email } = req.body;

    // Validación de los datos recibidos
    if (!username || !password || !nombreCompleto || !email) {
      return res.status(400).json({ success: false, error: "Faltan datos" });
    }

    // Verificar si el usuario ya existe en la base de datos
    const userRef = db.collection("users").doc(username);
    const doc = await userRef.get();

    if (doc.exists) {
      return res
        .status(400)
        .json({ success: false, error: "El usuario ya existe" });
    }

    // Encriptar la contraseña y guardar el nuevo usuario
    const hashedPassword = await bcrypt.hash(password, 10);
    await userRef.set({
      username,
      password: hashedPassword,
      nombreCompleto,
      email,
      sesionActiva01: null, // Campo inicializado vacío
      sesionActiva02: null, // Campo inicializado vacío
    });

    res
      .status(201)
      .json({ success: true, message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res
      .status(500)
      .json({ success: false, error: "Error al registrar el usuario" });
  }
});

// Endpoint para iniciar sesión
app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, error: "Faltan datos" });
    }

    const userRef = db.collection("users").doc(username);
    const doc = await userRef.get();

    if (!doc.exists) {
      return res
        .status(400)
        .json({ success: false, error: "Usuario no encontrado" });
    }

    const user = doc.data();

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, error: "Contraseña incorrecta" });
    }

    // Obtener la última sesión activa
    const lastSession = user.sesionActiva01 || "Primera vez iniciando sesión";

    // Actualizar Firestore: mover sesionActiva02 a sesionActiva01, y guardar la nueva fecha en sesionActiva02
    const newSessionTime = new Date().toISOString();
    await userRef.update({
      sesionActiva01: user.sesionActiva02 || lastSession,
      sesionActiva02: newSessionTime,
    });

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
        lastActive: lastSession, // Última sesión conocida
      },
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ success: false, error: "Error al iniciar sesión" });
  }
});

// Middleware para autenticar el token JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ success: false, error: "Acceso denegado. Token no proporcionado" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, error: "Token inválido o expirado" });
    }
    req.user = user; // Adjuntar los datos del usuario al request
    next();
  });
}


// Endpoint para obtener noticias protegidas (requiere autenticación)
app.get("/api/noticias", authenticateToken, async (req, res) => {
  const keywords =
    "Apple OR Android OR Windows OR programación OR PC OR iPhone OR JavaScript OR Python OR Java OR desarrollo OR código OR software";
  const lastWeekDate = getLastWeekDate();
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
    keywords
  )}&language=es&from=${lastWeekDate}&pageSize=20&apiKey=d73ce24ba58a4dde8df4f4717403b001`;

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
