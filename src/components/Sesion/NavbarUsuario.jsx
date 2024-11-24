import React from "react";
import { FiLogOut } from "react-icons/fi"; // Ícono de cierre de sesión

function NavbarUsuario({ user, onLogout, isVisible }) {
  if (!isVisible) return null;

  // Desglosar fecha y hora en partes separadas
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
    <div
      className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ease-in-out
        bg-black/10 backdrop-blur-lg rounded-lg mt-2 border border-violeta-marca/40 shadow-sm shadow-violeta-marca/20 max-w-sm px-3 py-2 flex justify-between items-center`}
    >
      {/* Información del usuario en fila */}
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
      {/* Botón con ícono para cerrar sesión */}
      <button
        onClick={onLogout}
        className="ml-3 text-red-500 hover:text-red-600 transition-colors p-1"
        aria-label="Cerrar sesión"
      >
        <FiLogOut className="w-4 h-4" /> {/* Ícono de cierre de sesión */}
      </button>
    </div>
  );
}

export default NavbarUsuario;
