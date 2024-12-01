import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, error: "Token no proporcionado" });
  }

  jwt.verify(token, process.env.SECRET_KEY || "tu_secreto", (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, error: "Token inválido o expirado" });
    }
    req.user = user; // Agregar el usuario al request
    next();
  });
};
