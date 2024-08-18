import React, { useEffect } from "react";
import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import { servicios } from "../config/datos";
import DetalleDeServicio from "../components/DetalleDeServicio";

function Servicios() {

  useEffect(() => {
    // Forzar desplazamiento al inicio al cargar la página
    window.scrollTo(0, 0);
  }, []); // Solo cuando el componente se monta

  return (
    <ContenedorPagina className="px-4">
      <h1 className="mt-16 text-xl font-bold">Servicios</h1>
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
  );
}

export default Servicios;
