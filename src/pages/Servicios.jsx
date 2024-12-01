import React, { useEffect } from "react";

// Componentes
import FondoParticulasX from "../components/FondoParticulasX";
import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import DetalleDeServicio from "../components/DetalleDeServicio";

// Datos
import { servicios } from "../config/datos";

function Servicios() {

  useEffect(() => {
    // Forzar desplazamiento al inicio al cargar la página
    window.scrollTo(0, 0);
  }, []); // Solo cuando el componente se monta

  return (
    <div className="relative min-h-screen">
      <FondoParticulasX /> {/* Incluye el fondo animado */}
      <ContenedorPagina className="px-4 relative z-10 mt-20">
        <h1 className="m-4 text-xl font-bold">Servicios</h1>
        <p className="mt-2 mb-8 text-l leading-relaxed">
          Descubre los servicios que ofrezco para ayudarte a alcanzar tus objetivos con soluciones personalizadas y efectivas.
        </p>
        {servicios.map((servicio) => (
          <DetalleDeServicio
            key={servicio.id}
            id={servicio.slug}
            icon={servicio.icon}
            title={servicio.title}
            description={servicio.description}
            description2={servicio.description2}
            description3={servicio.description3}
            images={servicio.images}
          />
        ))}
      </ContenedorPagina>
    </div>
  );
}

export default Servicios;
