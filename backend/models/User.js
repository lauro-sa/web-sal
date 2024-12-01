import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // Asegura que el nombre de usuario sea único
  email: { type: String, required: true, unique: true }, // Agrega el campo de correo electrónico único
  password: { type: String, required: true }, // Almacenará contraseñas cifradas
  lastLogin: { type: Date, default: null }, // Registra la última sesión
  createdAt: { type: Date, default: Date.now }, // Fecha de creación del usuario
});

// Middleware para cifrar la contraseña antes de guardar
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Si la contraseña no fue modificada, pasa al siguiente middleware
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); // Cifra la contraseña
    next();
  } catch (error) {
    next(error);
  }
});

// Método para comparar contraseñas
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password); // Compara la contraseña ingresada con la cifrada
};

export default mongoose.model("User", userSchema);
