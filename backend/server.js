// server.js
// Configuración del servidor y manejo de operaciones CRUD para usuarios utilizando MongoDB.

import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';
import "dotenv/config"; // Carga las variables de entorno desde el archivo .env

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.log("Error al conectar con MongoDB:", err));


// Modelo de usuario con Mongoose
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nombreCompleto: String,
  email: { type: String, required: true },
  sesionActiva01: Date,
  sesionActiva02: Date,
});
const User = mongoose.model('User', userSchema);

// Configuración de la aplicación Express
const app = express();
const PORT = process.env.PORT || 3002;

// Middlewares
app.use(cors());
app.use(express.json());

// Registro de usuarios
app.post("/api/register", async (req, res) => {
  const { username, password, nombreCompleto, email } = req.body;
  if (!username || !password || !nombreCompleto || !email) {
    return res.status(400).json({ error: "Faltan datos" });
  }
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      nombreCompleto,
      email,
    });
    await user.save();
    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
});

// Inicio de sesión de usuarios
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Faltan datos" });
  }
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }
    const lastSession = user.sesionActiva01 || "Primera vez iniciando sesión";
    const newSessionTime = new Date();
    await User.findByIdAndUpdate(user._id, {
      $set: { sesionActiva01: user.sesionActiva02 || lastSession, sesionActiva02: newSessionTime }
    });
    res.json({
      token: jwt.sign({ username, nombreCompleto: user.nombreCompleto, email: user.email }, process.env.SECRET_KEY, { expiresIn: "1h" }),
      user: { nombreCompleto: user.nombreCompleto, email: user.email, lastActive: lastSession },
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});

// Middleware para autenticación de token JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Acceso denegado. Token no proporcionado" });
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token inválido o expirado" });
    }
    req.user = user;
    next();
  });
}

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
