import React from "react";
import ContenedorLayou3 from "./Contenedores/ContenedorLayou3";
import ContenedorLayou4 from "./Contenedores/ContenedorLayou4";
import InfoProyectos from "./InfoProyectos";

function LayouProyectos() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center m-4">
      <ContenedorLayou3 className="flex flex-col justify-center items-center ">
        <p className="text-lg uppercase tracking-wider mb-4 text-violeta-marca">
          Proyectos
        </p>
        <p className="text-sm tracking-wider md:text-left">
          Me especializo en la innovación y la aplicación de tecnología avanzada
          para crear experiencias únicas y efectivas. Mi compromiso con la
          calidad y la excelencia se refleja en cada proyecto que desarrollo,
          asegurándome de que cada solución no solo sea rápida y segura, sino
          también visualmente atractiva. Descubre cómo utilizo mi conocimiento y
          habilidades para ofrecerte soluciones que superan las expectativas y
          transforman ideas en realidades impactantes.
        </p>
      </ContenedorLayou3>
      <ContenedorLayou4 className="">
        <InfoProyectos />
      </ContenedorLayou4>
    </div>
  );
}

export default LayouProyectos;
