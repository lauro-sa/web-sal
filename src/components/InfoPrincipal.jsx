import React from "react";
import { Link } from "react-router-dom";
import Contenedor from "../components/Contenedor";

import "../estilos.css"

import TransicionDeMovimiento from "./TransicionDeMovimiento";

function InfoPrincipal() {
  return (
    <Contenedor className="">
      <div className="flex flex-col space-y-12 py-20 md:py-40">
        <TransicionDeMovimiento type="entrarArribaAbajo">
          <p className="text-sm uppercase tracking-wider">BIENVENIDOS</p>
        </TransicionDeMovimiento>
        <h1 className="flex flex-col items-center justify-center md:flex-row md:items-end h-full text-center">
          <span className="text-2xl uppercase tracking-wider">Soy</span>
          <span className="animated-text text-4xl uppercase tracking-wider mx-2">
            Sebastian Code
          </span>
          <span className="text-2xl uppercase tracking-wider">Programador</span>
        </h1>
        <p className="text-sm uppercase tracking-wider">
          Creo soluciones elegantes y simples a través de mi diseño y
          programación, disfrutando cada paso del proceso.
        </p>
        <TransicionDeMovimiento type="entrarAbajoArriba">
          <Link
            to="/proyectos"
            className="px-4 py-2 w-40 text-center mx-auto text-sm uppercase tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-texto-claro hover:bg-violeta-marca hover:text-white transition-colors"
          >
            Ver Proyectos
          </Link>
        </TransicionDeMovimiento>
      </div>
    </Contenedor>
  );
}

export default InfoPrincipal;
