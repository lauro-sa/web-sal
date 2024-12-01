import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

// Registro de usuario
router.post("/register", async (req, res) => {
    try {
        let { username, password, email, nombreCompleto } = req.body;

        if (!username || !password || !email || !nombreCompleto) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        // Normalizar datos para mantener consistencia
        username = username.trim().toLowerCase();
        email = email.trim().toLowerCase();

        // Verificar si el usuario o email ya existe
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: `El usuario ya existe: ${username}` });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: `El correo ya está en uso: ${email}` });
        }

        // Guardar la contraseña sin cifrar
        const newUser = new User({ username, password, email, nombreCompleto });
        await newUser.save();

        res.status(201).json({ message: "Usuario registrado exitosamente", user: newUser });
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).json({ message: "Error interno al registrar usuario", error: error.message });
    }
});



// Inicio de sesión
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "El usuario y la contraseña son obligatorios" });
        }

        const usernameLower = username.trim().toLowerCase();

        const user = await User.findOne({ username: usernameLower });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Comparar contraseñas directamente
        if (password !== user.password) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY || "tu_secreto", { expiresIn: "1h" });

        res.status(200).json({
            message: "Inicio de sesión exitoso",
            token: token,
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
        res.status(500).json({ message: "Error al iniciar sesión", error: error.message });
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
        // Logs para depuración
        console.log("Headers recibidos:", req.headers);
        console.log("ID recibido para eliminación:", req.params.id);

        const { id } = req.params;

        // Buscar usuario por ID
        const user = await User.findById(id);
        if (!user) {
            console.error("Usuario no encontrado con ID:", id);
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Eliminar usuario
        await user.deleteOne();
        console.log("Usuario eliminado exitosamente:", id);

        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        res.status(500).json({ message: "Error al eliminar usuario", error: error.message });
    }
});


export default router;
