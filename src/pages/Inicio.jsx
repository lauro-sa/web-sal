import React from "react";

import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import InfoPrincipal from "../components/InfoPrincipal";
import LayouInfoSal from "../components/LayouInfoSal";
import InfoServicios from "../components/InfoServicios";
import LayouHabilidades from "../components/LayouHabilidades";
import LayouProyectos from "../components/LayouProyectos";

function Inicio() {
  return (
    <ContenedorPagina>
      <div className="flex justify-center items-center min-h-screen">
        <InfoPrincipal />
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <LayouInfoSal />
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <InfoServicios />
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <LayouHabilidades />
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <LayouProyectos />
      </div>
    </ContenedorPagina>
  );
}

export default Inicio;
