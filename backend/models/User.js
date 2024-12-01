import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Contraseña sin cifrar
    nombreCompleto: { type: String, required: true },
    lastLogin: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
