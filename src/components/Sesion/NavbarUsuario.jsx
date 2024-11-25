// PFI | FULL STACK AVANZADO - Consigna de trabajo final integrador.
// Este archivo define un componente Navbar que utiliza animaciones para mostrar información del usuario
// y proporciona una opción para cerrar sesión, cumpliendo con las prácticas de UX en aplicaciones web.

import React from "react";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion"; // Importa la biblioteca de animaciones

// Definición de la animación para la entrada y salida del Navbar
const entrarDesdeIzquierda = {
  hidden: {
    x: "-100vw", // Comienza fuera de la pantalla a la izquierda
    opacity: 0, // Inicialmente invisible
  },
  visible: {
    x: "-50%", 
    opacity: 1, 
    transition: {
      type: "spring", // Tipo de transición "resorte"
      stiffness: 120, 
      damping: 15, 
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw", // Mueve el componente hacia la izquierda fuera de la pantalla
    opacity: 0, // Hace el componente invisible
    transition: {
      duration: 0.3, // Duración de la animación al salir, más rápida
    },
  },
};

function NavbarUsuario({ isVisible, user, onLogout }) {
  if (!isVisible) return null; // No renderiza nada si no está visible

  // Función para formatear la última sesión activa del usuario
  const formatLastSession = (dateTime) => {
    if (!dateTime) return { date: "No disponible", time: "" };

    const dateObj = new Date(dateTime);
    const formattedDate = dateObj.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
    const formattedTime = dateObj.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return { date: formattedDate, time: formattedTime };
  };

  const lastSession = formatLastSession(user?.lastActiveSession);

  return (
    <motion.div
      className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ease-in-out
        bg-black/10 backdrop-blur-lg rounded-lg mt-2 border border-violeta-marca/40 shadow-sm shadow-violeta-marca/20 max-w-sm px-3 py-2 flex justify-between items-center`}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={entrarDesdeIzquierda} // Usa la animación definida
    >
      {/* Información del usuario mostrada en fila */}
      <div className="flex space-x-8 text-[10px] md:text-[11px] font-mono text-white truncate">
        <div className="flex flex-col items-center">
          <strong className="text-[9px] uppercase text-violeta-marca">Nombre</strong>
          <p className="truncate">{user?.nombreCompleto || "No disponible"}</p>
        </div>
        <div className="flex flex-col items-center">
          <strong className="text-[9px] uppercase text-violeta-marca">Correo</strong>
          <p className="truncate">{user?.email || "No disponible"}</p>
        </div>
        <div className="flex flex-col items-center">
          <strong className="text-[9px] uppercase text-violeta-marca">Última sesión</strong>
          <div className="flex text-center">
            <span className="truncate text-[10px]">{lastSession.date}</span>
            <span className="mx-1">|</span>
            <span className="truncate text-[10px]">{lastSession.time}</span>
          </div>
        </div>
      </div>
      {/* Botón para cerrar sesión con icono */}
      <button
        onClick={onLogout}
        className="ml-3 text-red-500 hover:text-red-600 transition-colors p-1"
        aria-label="Cerrar sesión"
      >
        <FiLogOut className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

export default NavbarUsuario;
