import React from "react";
import ContenedorPagina from "../components/ContenedorPagina";
import InfoPrincipal from "../components/InfoPrincipal";
import LayouInfoSal from "../components/LayouInfoSal";
import InfoServicios from "../components/InfoServicios";
import LayouHabilidades from "../components/LayouHabilidades";
import RedesSociales from "../components/RedesSociales";

function SobreMi() {
  return (
    <ContenedorPagina>
      <InfoPrincipal />
      <LayouInfoSal />
      <InfoServicios />
      <LayouHabilidades />
      <RedesSociales />

      <h1>HOLAAAAAA</h1>
    </ContenedorPagina>
  );
}

export default SobreMi;
