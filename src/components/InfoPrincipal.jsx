import React from "react";
import { Link } from "react-router-dom";

// Componentes
import Contenedor from "../components/Contenedores/Contenedor";
import TransicionDeMovimiento from "./TransicionDeMovimiento";

// Estilos
import "../estilos.css";

function InfoPrincipal() {
  return (
    <div className="-mt-16 h-screen  flex items-center justify-center">
      <Contenedor className="">
        <div className="flex flex-col space-y-12 py-20 md:py-40">
          <TransicionDeMovimiento type="entrarArribaAbajo">
            <p className="text-sm uppercase tracking-wider">Hola, soy Sebastián. Bienvenido a mi portafolio.</p>
          </TransicionDeMovimiento>
          <h1 className="flex flex-col items-center justify-center ">
           
            <span className="text-xl tracking-wider">S7ian Code</span>
            <span className="animated-text text-4xl uppercase tracking-wider mx-2">
            Desarrollador <br/>Full-Stack
            </span>

          </h1>
          <p className="text-sm uppercase tracking-wider">
          Apasionado por la tecnología y el diseño, enfocado en construir
              soluciones de software eficientes, escalables y visualmente
              atractivas.
          </p>
          <TransicionDeMovimiento type="entrarAbajoArriba">
            <Link
              to="/proyectos"
              className="px-4 py-3 w-40 text-center mx-auto text-sm uppercase tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
            >
              Ver Proyectos
            </Link>
          </TransicionDeMovimiento>
        </div>
      </Contenedor>
    </div>
  );
}

export default InfoPrincipal;