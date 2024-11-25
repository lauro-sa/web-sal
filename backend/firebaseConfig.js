// PFI | FULL STACK AVANZADO - Consigna de trabajo final integrador.
// Este archivo configura la conexión con Firebase Firestore, cumpliendo con la consigna de manejar una base de datos no relacional.

import admin from "firebase-admin";

// Configuración de la cuenta de servicio de Firebase utilizando variables de entorno para la seguridad
const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Asegura el formato correcto de la clave privada
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.FIREBASE_CLIENT_EMAIL}`,
};

try {
  // Inicializa Firebase Admin con las credenciales de la cuenta de servicio
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  console.log("Firebase Admin inicializado correctamente");
} catch (error) {
  // Captura y registra errores que ocurran durante la inicialización
  console.error("Error inicializando Firebase Admin:", error);
}

// Exporta la conexión de Firestore para ser utilizada en otros archivos del backend
const db = admin.firestore();
export default db;
