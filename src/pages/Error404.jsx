import React from 'react';

// Navegación
import { Link } from 'react-router-dom';

// Componentes
import FondoParticulasX from "../components/FondoParticulasX"; 

function Error404() {
  return (
    <div className="relative min-h-screen">
      <FondoParticulasX /> {/* Incluye el fondo animado */}
      <div className="flex flex-col items-center justify-center h-screen relative z-10">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-4">
          ¡Oops! La página que buscas no existe.
        </p>
        <Link
          to="/"
          className="mt-6 px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-600 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default Error404;
