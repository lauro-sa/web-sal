import React from "react";

function Contenedor({ children, className }) {
  // 'max-w-[800px]' establece un ancho máximo de 800px
  // 'w-auto' podría ser usado para permitir que el ancho crezca con el contenido, pero no es necesario con inline-block
  // 'inline-block' permite que el div ajuste su ancho al contenido
  const clasesCombinadas = `inline-block text-center p-4 border border-solid border-azul-custom bg-fondo-oscuro/90 w-auto max-w-[800px] m-4 ${
    className || ""
  }`;

  return <div className={clasesCombinadas}>{children}</div>;
}

export default Contenedor;
