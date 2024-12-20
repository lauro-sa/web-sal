import React from "react";

// Componentes
import FondoParticulasX from "../components/FondoParticulasX";
import ContenedorPagina from "../components/Contenedores/ContenedorPagina";

function Proyectos() {
  return (
    <div className="relative min-h-screen">
      <FondoParticulasX /> {/* Incluye el fondo animado */}
      <ContenedorPagina className="px-4 relative z-10 mt-20">
        <h1 className="mt-4 text-xl font-bold">Proyectos</h1>
        <p className="mt-2 mb-8 text-l leading-relaxed">
          En esta sección encontrarás una selección de los proyectos en los que he trabajado y que considero importantes. Estos proyectos representan mi crecimiento como desarrollador y destacan mis habilidades en diferentes tecnologías. ¡Explora para conocer más sobre mi trabajo y lo que puedo ofrecer!
        </p>
      </ContenedorPagina>
    </div>
  );
}

export default Proyectos;
