import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import fetch from "node-fetch";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// Usamos el puerto dinámico de Vercel o el puerto 5000 en desarrollo
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY || "tu_secreto"; // Clave secreta para JWT

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Middleware para autenticar el token JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, error: "Token no proporcionado" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, error: "Token inválido o expirado" });
    }
    req.user = user;
    next();
  });
}

// Rutas principales
app.use("/api/users", userRoutes);

// Ruta para obtener noticias protegidas
app.get("/api/noticias", authenticateToken, async (req, res) => {
  const keywords = "Apple OR Android OR Windows OR programación OR PC OR iPhone OR JavaScript OR Python OR Java OR desarrollo OR código OR software";
  const lastWeekDate = getLastWeekDate();
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
    keywords)}&language=es&from=${lastWeekDate}&pageSize=20&apiKey=${process.env.API_KEY}`;

  try {
    console.log(`Fetching news from URL: ${url}`); // Agregar log para ver la URL
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`News API Error: ${response.statusText}`); // Log para el error
      return res.status(500).json({
        success: false,
        error: "Error al recuperar las noticias de tecnología",
      });
    }
    const data = await response.json();
    res.status(200).json({ success: true, articles: data.articles });
  } catch (error) {
    console.error("Error al obtener noticias:", error); // Log para cualquier otro error
    res.status(500).json({
      success: false,
      error: "Error al recuperar las noticias de tecnología",
    });
  }
});

// Helper para calcular la fecha de hace una semana
function getLastWeekDate() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toISOString().split("T")[0];
}

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
