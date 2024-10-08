import React from "react";

// Componentes
import ContenedorLayou3 from "./Contenedores/ContenedorLayou3";
import ContenedorLayou4 from "./Contenedores/ContenedorLayou4";
import InfoTecnologias from "./InfoTecnologias";

function LayouHabilidades() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center m-4">
      <ContenedorLayou3 className="flex flex-col justify-center items-center ">
        <p className="text-lg uppercase tracking-wider mb-4 text-violeta-marca">
          Habilidades
        </p>
        <p className="text-sm tracking-wider md:text-left">
          Utilizo tecnología de punta para asegurarme de que tu experiencia en
          mi sitio sea única, rápida y segura. Mi enfoque en innovación y
          calidad me diferencia, ofreciéndote soluciones efectivas y visualmente
          atractivas.
        </p>
      </ContenedorLayou3>
      <ContenedorLayou4 className="">
        <InfoTecnologias />
      </ContenedorLayou4>
    </div>
  );
}

export default LayouHabilidades;
