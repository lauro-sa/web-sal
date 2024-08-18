import React from "react";

// Componentes
import FondoParticulasX from "../components/FondoParticulasX";
import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import Contenedor from "../components/Contenedores/Contenedor";
import LineaDeTiempo from "../components/LineaDeTiempo";

function SobreMi() {
  return (
    <div className="relative min-h-screen">
      <FondoParticulasX /> {/* Incluye el fondo animado */}
      <ContenedorPagina className="px-4 relative z-10">
        <h1 className="mt-16 text-xl font-bold">Sobre Mí</h1>
        <p className="mt-2 mb-8 text-l leading-relaxed">
          ¡Hola! Soy un apasionado desarrollador que disfruta creando soluciones elegantes y eficientes.
          Aquí encontrarás un recorrido por mi trayectoria profesional y educativa.
        </p>
        <Contenedor className="text-center mb-16">
          <p className="mt-2 mb-8 text-l leading-relaxed text-gray-400">
            Soy muy autodidacta y siempre estoy en busca de nuevas oportunidades para aprender y crecer. Me nutro de una amplia variedad de recursos en línea para mantenerme actualizado con las últimas tecnologías y mejores prácticas en desarrollo web.
          </p>
          <p className="mt-2 mb-16 text-l leading-relaxed text-gray-400">
            Desde aprender nuevas tecnologías hasta enfrentar desafíos en proyectos, siempre busco mejorar y crecer.
            Echa un vistazo a mi línea de tiempo para conocer más sobre mis logros y experiencias.
          </p>
          <LineaDeTiempo />
        </Contenedor>
      </ContenedorPagina>
    </div>
  );
}

export default SobreMi;
