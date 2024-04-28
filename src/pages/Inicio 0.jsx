import React from "react";
import HeroAnimation from "../components/HeroAnimation";

import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import InfoPrincipal from "../components/InfoPrincipal";
import LayouInfoSal from "../components/LayouInfoSal";
import InfoServicios from "../components/InfoServicios";
import LayouHabilidades from "../components/LayouHabilidades";
import LayouProyectos from "../components/LayouProyectos";
import CardGeneradorContrasenas from "../components/LabComponentes/GeneradorDeContraseñas/CardGeneradorContrasenas";
import CardGeneradorQr from "../components/LabComponentes/GeneradorDeQr/CardGeneradorQr";
import CardConversorAudio from "../components/LabComponentes/ConversorAudio/CardConversorAudio";

function Inicio() {
  return (
    <ContenedorPagina>
      <InfoPrincipal />
      <LayouInfoSal />
      <InfoServicios />
      <LayouHabilidades />
      <LayouProyectos />
      <CardGeneradorContrasenas />
      <CardGeneradorQr />
      <CardConversorAudio />
    </ContenedorPagina>
  );
}

export default Inicio;
