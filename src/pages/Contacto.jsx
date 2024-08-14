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
    <ContenedorPagina className="px-4 mt-8">
      {" "}
      <p className="my-8 text-xs md:text-sm">
        Aquí puedes poner en contacto con migo por estos canales o bien completa
        el formulario y te respodere a la brevedad.
      </p>
      <RedesSociales iconsToShow={iconosDeseados} />
      <Contenedor className=" flex justify-center m-auto mt-8 max-w-[450px] bg-fondo-oscuro/60">
        <Formulario />
      </Contenedor>
    </ContenedorPagina>
  );
}

export default Contacto;
