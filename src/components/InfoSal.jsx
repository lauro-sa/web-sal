import React from "react";

// Estilos
import "../estilos.css";

// Componentes
import TransicionDeMovimiento from "./TransicionDeMovimiento";

function InfoSal() {
  return (
    <div className="flex flex-col space-y-12 py-10">
      <TransicionDeMovimiento type="entrarArribaAbajo">
        <p className="text-sm uppercase tracking-wider text-left">Sobre Mí</p>
      </TransicionDeMovimiento>
      <h1 className="md:text-end">
        <span className="animated-text text-3xl uppercase tracking-wider">
          Sebastian
        </span>
        <br />
        <span className="text-xl uppercase tracking-wider">Desarrollador</span>
      </h1>
      <p className="text-sm tracking-wider text-center md:text-left">
        Soy un desarrollador proactivo y orientado a resultados, con un firme compromiso con el desarrollo profesional continuo. Me especializo en la adopción de tecnologías de vanguardia y la aplicación de las mejores prácticas de la industria para construir soluciones de software eficientes y robustas.
      </p>
      <p className="text-sm tracking-wider text-center md:text-left">
        Busco activamente participar en proyectos desafiantes donde pueda aportar mis habilidades técnicas y colaborar en la creación de soluciones innovadoras. Mi enfoque se centra en la calidad, la mejora continua y la entrega de resultados que superen las expectativas.
      </p>
      <TransicionDeMovimiento type="entrarAbajoArriba">
        <div className="flex justify-center space-x-4">
          <a
            href="/web-sal/assets/archivos/CV-SebastianLauro.pdf"
            download
            className="px-4 py-3 text-center text-[10px] md:text-sm tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
          >
            DESCARGAR CV (es)
          </a>
          <a
            href="/web-sal/assets/archivos/CV-SebastianLauro.pdf"
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
