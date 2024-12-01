import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const testConnection = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Conexión a MongoDB exitosa");
        mongoose.connection.close(); // Cierra la conexión después de probar
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
    }
};

testConnection();
