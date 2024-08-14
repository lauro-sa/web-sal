import React from "react";
import "../estilos.css";

import TransicionDeMovimiento from "./TransicionDeMovimiento";

function InfoSal() {
  return (
    <div className="flex flex-col space-y-12 py-10">
      <TransicionDeMovimiento type="entrarArribaAbajo">
        <p className="text-sm uppercase tracking-wider text-left">Sobre Mi</p>
      </TransicionDeMovimiento>
      <h1 className="md:text-end">
        <span className="text-2xl uppercase tracking-wider">
          Mi nombre es
        </span>
        <span className="animated-text text-2xl uppercase tracking-wider mx-2">
          Sebastian
        </span>
        <span className="text-2xl uppercase tracking-wider">
          y soy
        </span>
        <br />
        <span className="text-xl uppercase tracking-wider">Programador</span>
      </h1>
      <p className="text-sm tracking-wider text-center md:text-left">
        Un apasionado de la tecnología, estoy comprometido con mi
        crecimiento constante como programador. Me gusta mantenerme en constante
        formación y aplicar lo que aprendo en la práctica. Soy una persona
        empática, dedicada y curiosa, siempre dispuesta a aprender cosas nuevas.
      </p>
      <p className="text-sm tracking-wider text-center md:text-left">
        Me interesa formar parte de proyectos que me permitan seguir
        desarrollándome profesionalmente y mejorar mis habilidades. Siempre estoy dispuesto a asumir nuevos retos y
        aprender de mis errores para mejorar continuamente.
      </p>
      <TransicionDeMovimiento type="entrarAbajoArriba">
        <div className="flex justify-center space-x-4">
          <a
            href={`${import.meta.env.BASE_URL}assets/archivos/CV-SebastianLauro.pdf`}
            download
            className="px-4 py-3 text-center text-[10px] md:text-sm tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
          >
            DESCARGAR CV (es)
          </a>
          <a
            href={`${import.meta.env.BASE_URL}assets/archivos/CV-SebastianLauro.pdf`}
            download
            className="px-4 py-3 text-center text-[10px] md:text-sm tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
          >
            DOWNLOAD CV (en)
          </a>


        </div>
      </TransicionDeMovimiento>
    </div>
  );
}

export default InfoSal;
