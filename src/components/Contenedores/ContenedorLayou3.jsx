import React from "react";
import TransicionDeMovimiento from "../TransicionDeMovimiento";

function ContenedorLayout3({ children, className }) {
  // Clases base y condiciones específicas para los estilos
  const clasesCombinadas = `inline-block text-center p-4 border border-solid border-azul-custom bg-fondo-oscuro/90 w-full md:max-w-[250px] md:py-24 h-auto flex flex-col justify-center items-center  sm:border-b md:border-b-1 md:border-r-0 md:border-t md:border-l`;

  
  return (
    <TransicionDeMovimiento type="entrarIzquierdaDerecha">
      <div className={clasesCombinadas}>{children}</div>
    </TransicionDeMovimiento>
  );
}

export default ContenedorLayout3;
