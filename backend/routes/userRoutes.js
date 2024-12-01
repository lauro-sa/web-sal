import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

import { authenticateToken } from "../server.js"; 

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

// Registro de usuario
router.post("/register", async (req, res) => {
    try {
        const { username, password, email, nombreCompleto } = req.body;

        if (!username || !password || !email || !nombreCompleto) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "El correo ya está en uso" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, email, nombreCompleto });
        await newUser.save();

        res.status(201).json({ message: "Usuario registrado exitosamente", user: newUser });
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).json({ message: "Error al registrar usuario", error });
    }
});

// Inicio de sesión
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "El usuario y la contraseña son obligatorios" });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        user.lastLogin = new Date();
        await user.save();

        res.status(200).json({
            message: "Inicio de sesión exitoso",
            token: jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" }),
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                nombreCompleto: user.nombreCompleto,
                lastLogin: user.lastLogin,
            },
        });
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ message: "Error al iniciar sesión", error });
    }
});

// Obtención de usuarios
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error });
    }
});

// Ruta para eliminar un usuario protegida por token
router.delete("/:id", authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
  
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      await user.remove();
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      res.status(500).json({ message: "Error al eliminar usuario", error });
    }
  });

export default router;
