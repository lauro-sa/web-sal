import React from "react";
import TransicionDeMovimiento from "../TransicionDeMovimiento";

function ContenedorLayout4({ children, className }) {
  // Clases base y condiciones específicas para los estilos
  const clasesCombinadas2 = `inline-block text-center p-4 border border-solid border-azul-custom bg-fondo-oscuro/90 w-full md:max-w-[550px] h-auto ${className || ""} sm:border-t-0 md:border-t`;

  return (
    <TransicionDeMovimiento type="entrarDerechaIzquierda">
      <div className={clasesCombinadas2}>{children}</div>
    </TransicionDeMovimiento>
  );
}

export default ContenedorLayout4;
