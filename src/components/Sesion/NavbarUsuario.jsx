import React from "react";

function NavbarUsuario({ user, onLogout, isVisible }) {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-16 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ease-in-out
        bg-black/20 backdrop-blur-xl rounded-xl mt-4 border border-violeta-marca/50 shadow-md shadow-violeta-marca/30 max-w-7xl px-8 py-3 flex justify-between items-center`}
    >
      {/* Información del usuario en fila */}
      <div className="flex space-x-6 text-xs md:text-sm font-mono text-white">
        <div className="flex flex-col">
          <strong className="text-[10px] md:text-xs uppercase text-violeta-marca">
            Nombre Completo
          </strong>
          <p>{user?.nombreCompleto || "No disponible"}</p>
        </div>
        <div className="flex flex-col">
          <strong className="text-[10px] md:text-xs uppercase text-violeta-marca">
            Correo Electrónico
          </strong>
          <p>{user?.email || "No disponible"}</p>
        </div>
        <div className="flex flex-col">
          <strong className="text-[10px] md:text-xs uppercase text-violeta-marca">
            Última sesión activa
          </strong>
          <p>{user?.lastActiveSession || "No disponible"}</p>
        </div>
      </div>
      {/* Botón para cerrar sesión */}
      <button
        onClick={onLogout}
        className="ml-4 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 text-xs md:text-sm font-bold"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}

export default NavbarUsuario;
