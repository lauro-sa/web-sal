import React from "react";

// Componentes
import ContenedorLayou1 from "./Contenedores/ContenedorLayou1";
import ContenedorLayou2 from "./Contenedores/ContenedorLayou2";
import InfoSal from "./InfoSal";

// Activos
import fotoRetrato from '../assets/img/sal-01.png';

function LayouInfoSal() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center m-4">
      <ContenedorLayou1 className="flex flex-col justify-center items-center ">
        <div className="w-52 md:w-40 mb-4">
          <img
            src={fotoRetrato}
            alt="SAL"
            style={{ width: "100%", height: "auto", opacity: "0.8" }}
            draggable="false"
          />
        </div>
        <p className="text-sm tracking-wider md:text-left">Developer</p>
        <p className="text-sm tracking-wider md:text-left">2019 - Presente</p>
      </ContenedorLayou1>
      <ContenedorLayou2 className="">
        <InfoSal />
      </ContenedorLayou2>
    </div>
  );
}

export default LayouInfoSal;
