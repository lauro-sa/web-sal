import React from "react";
import { FiLogOut, FiTrash2 } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Animación para la tarjeta de usuario
const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 20, // Empieza ligeramente abajo
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,     // Sube a su posición final
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 20,    // Vuelve a bajar al desaparecer
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

function TarjetaUsuario({ isVisible, user, onLogout, onDeleteUser }) {
  // Función para formatear la fecha y hora
  const formatLastSession = (dateTime) => {
    if (!dateTime) return "No disponible";
    const dateObj = new Date(dateTime);
    return dateObj.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const lastSession = formatLastSession(user?.lastActive);

  return (
    // AnimatePresence permite la animación de salida del componente
    <AnimatePresence>
      {isVisible && (
        <motion.div
          // Posicionamiento: Justo encima del botón flotante de usuario
          className="fixed bottom-48 right-4 z-40 w-72 max-w-[80vw]
            flex flex-col text-white
            bg-black/30 backdrop-blur-xl rounded-2xl 
            border border-violeta-marca/30 shadow-2xl shadow-violeta-marca/20"
          variants={cardAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* --- Sección de Información del Usuario --- */}
          <div className="px-5 py-4 border-b border-violeta-marca/20">
            <p className="font-bold text-lg truncate" title={user?.nombreCompleto}>
              {user?.nombreCompleto || "Usuario"}
            </p>
            <p className="text-sm text-gray-300 truncate" title={user?.email}>
              {user?.email || "No disponible"}
            </p>
            <div className="text-xs text-gray-400 mt-2 font-mono">
              <p>Última sesión: {lastSession}</p>
            </div>
          </div>

          {/* --- Sección de Acciones --- */}
          <div className="p-2 flex flex-col">
            <button
              onClick={onLogout}
              className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-violeta-marca/20 transition-colors duration-200"
            >
              <FiLogOut className="mr-3 text-gray-300" />
              Cerrar Sesión
            </button>
            <button
              onClick={onDeleteUser}
              className="flex items-center w-full text-left px-3 py-2 rounded-lg text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-colors duration-200"
            >
              <FiTrash2 className="mr-3" />
              Eliminar Cuenta
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TarjetaUsuario;
