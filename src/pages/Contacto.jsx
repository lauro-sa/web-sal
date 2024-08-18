import React from "react";
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
    "formulario",
  ];

  return (
    <ContenedorPagina className="px-4">
      <h1 className="mt-16 text-xl font-bold">Contacto</h1>
      <p className="mt-2 mb-8 text-l leading-relaxed">
        Aquí puedes ponerte en contacto conmigo a través de estos canales o bien completar
        el formulario y te responderé a la brevedad.
      </p>
      <RedesSociales iconsToShow={iconosDeseados} />
      <Contenedor className="flex justify-center m-auto mt-8 max-w-[450px] bg-fondo-oscuro/60">
        <Formulario />
      </Contenedor>
    </ContenedorPagina>
  );
}

export default Contacto;
