import React from "react";
import { FiLogOut, FiTrash2 } from "react-icons/fi";
import { motion } from "framer-motion";

const entrarDesdeIzquierda = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

function NavbarUsuario({ isVisible, user, onLogout, onDeleteUser }) {
  if (!isVisible) return null;

  const formatLastSession = (dateTime) => {
    if (!dateTime) return { date: "No disponible", time: "" };
    const dateObj = new Date(dateTime);
    return {
      date: dateObj.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
      time: dateObj.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  };

  const lastSession = formatLastSession(user?.lastActive);

  // Log para verificar que el usuario se está pasando correctamente
  console.log("Datos del usuario en NavbarUsuario:", user);

  return (
    <motion.div
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ease-in-out
        bg-black/10 backdrop-blur-lg rounded-lg mt-2 border border-violeta-marca/40 shadow-sm shadow-violeta-marca/20 max-w-sm px-3 py-2 flex justify-between items-center"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={entrarDesdeIzquierda}
    >
      <button
        onClick={() => {
          console.log("Solicitud de eliminación enviada.");
          onDeleteUser();
        }}
        className="mr-4 text-red-500 hover:text-red-600 transition-colors p-1"
        aria-label="Eliminar cuenta"
      >
        <FiTrash2 className="w-4 h-4" />
      </button>

      <div className="flex space-x-8 text-[10px] md:text-[11px] font-mono text-white truncate">
        <div className="flex flex-col items-center">
          <strong className="text-[9px] uppercase text-violeta-marca">
            Nombre
          </strong>
          <p className="truncate">{user?.nombreCompleto || "No disponible"}</p>
        </div>
        <div className="flex flex-col items-center">
          <strong className="text-[9px] uppercase text-violeta-marca">
            Correo
          </strong>
          <p className="truncate">{user?.email || "No disponible"}</p>
        </div>
        <div className="flex flex-col items-center">
          <strong className="text-[9px] uppercase text-violeta-marca">
            Última sesión
          </strong>
          <div className="flex text-center">
            <span className="truncate text-[10px]">{lastSession.date}</span>
            <span className="mx-1">|</span>
            <span className="truncate text-[10px]">{lastSession.time}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          console.log("Cierre de sesión solicitado.");
          onLogout();
        }}
        className="ml-4 text-red-500 hover:text-red-600 transition-colors p-1"
        aria-label="Cerrar sesión"
      >
        <FiLogOut className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

export default NavbarUsuario;
