import React from "react";
import TransicionDeMovimiento from "./TransicionDeMovimiento";

function ContenedorLayout1({ children, className }) {
  // Aplicamos las clases base y luego añadimos las condiciones para los estilos específicos
  const clasesCombinadas = `inline-block text-center p-4 border border-solid
    border-azul-custom bg-fondo-oscuro/90 w-full md:max-w-[250px] md:py-24
    h-auto ${className || ""} md:border-r-0 md:border-t md:border-l md:border-b
    border-b-0 sm:border-t sm:border-l sm:border-r`;

  return (
    <TransicionDeMovimiento type="entrarIzquierdaDerecha">
      <div className={clasesCombinadas}>{children}</div>
    </TransicionDeMovimiento>
  );
}

export default ContenedorLayout1;
