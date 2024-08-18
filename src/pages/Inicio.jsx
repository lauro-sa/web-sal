import React from "react";

import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import InfoPrincipal from "../components/InfoPrincipal";
import LayouInfoSal from "../components/LayouInfoSal";
import InfoServicios from "../components/InfoServicios";
import LayouHabilidades from "../components/LayouHabilidades";
import LayouProyectos from "../components/LayouProyectos";
import BotonFlotanteVideollamada from "../components/VideoConsulta/BotonFlotanteVideollamada"; // Importa el botón flotante

function Inicio() {
  return (
    <ContenedorPagina>
      {/* Botón flotante para agendar videollamada */}
      <BotonFlotanteVideollamada />
      
      <div className="flex justify-center items-center min-h-screen">
        <InfoPrincipal />
      </div>
      <div className="flex justify-center items-center mb-80">
        <LayouInfoSal />
      </div>
      <div className="flex justify-center items-center mb-80">
        <InfoServicios />
      </div>
      <div className="flex justify-center items-center mb-80">
        <LayouHabilidades />
      </div>
      <div className="flex justify-center items-center mb-24">
        <LayouProyectos />
      </div>
    </ContenedorPagina>
  );
}

export default Inicio;
