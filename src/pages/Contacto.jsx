import React from "react";

// Componentes
import FondoParticulasX from "../components/FondoParticulasX";
import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import Contenedor from "../components/Contenedores/Contenedor";
import Formulario from "../components/Formulario/Formulario";
import RedesSociales from "../components/RedesSociales";

function Contacto() {
  const iconosDeseados = [
    "email",
    "linkedin",
    "whatsapp",
    "github",
    "instagram",
  ];

  return (
    <div className="relative min-h-screen">
      <FondoParticulasX /> {/* Incluye el fondo animado */}
      <ContenedorPagina className="px-4 relative z-10 mt-20">
        <h1 className="m-4 text-xl font-bold">Contacto</h1>
        <p className="mt-2 mb-8 text-l leading-relaxed">
        Si tienes alguna pregunta o simplemente quieres saludar, no dudes en contactarme.
        </p>
        {/* <RedesSociales iconsToShow={iconosDeseados} /> */}
        <div className="flex justify-center items-center">
        <Contenedor className="">
          <Formulario />
        </Contenedor>
        </div>
      </ContenedorPagina>
    </div>
  );
}

export default Contacto;
