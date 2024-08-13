import React from "react";
import HeroAnimation from "../components/HeroAnimation";
import ReactFullpage from "@fullpage/react-fullpage";

import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import InfoPrincipal from "../components/InfoPrincipal";
import LayouInfoSal from "../components/LayouInfoSal";
import InfoServicios from "../components/InfoServicios";
import LayouHabilidades from "../components/LayouHabilidades";
import LayouProyectos from "../components/LayouProyectos";

const Inicio = () => (
  <ReactFullpage
    scrollingSpeed={1000} /* Opciones de configuración disponibles */
    render={() => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <InfoPrincipal />
          </div>
          <div className="section">
            <LayouInfoSal />
          </div>
          <div className="section">
            <InfoServicios />
          </div>
          <div className="section">
            <LayouHabilidades />
          </div>
          <div className="section">
            <LayouProyectos />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Inicio;
