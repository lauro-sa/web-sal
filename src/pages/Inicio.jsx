import React from "react";
import ContenedorPagina from "../components/ContenedorPagina";
import HeroAnimation from "../components/HeroAnimation";

function Inicio() {
  return (
    <ContenedorPagina>
      <HeroAnimation />
      <h1>Inicio</h1>
      <p>
        Aquí puedes poner información de contacto o un formulario de contacto.
      </p>
      <div className="h-96 bg-red-900 m-4">Hola</div>
      <div className="h-96 bg-red-900 m-4">Hola</div>
      <div className="h-96 bg-red-900 m-4">Hola</div>
      <div className="h-96 bg-red-900 m-4">Hola</div>
      <div className="h-96 bg-red-900 m-4">Hola</div>
    </ContenedorPagina>
  );
}

export default Inicio;
