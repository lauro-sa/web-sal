import React from "react";

function ContenedorLayou2({ children, className }) {
  // Mantenemos todas las clases originales, asegurando que siempre tenga todos los bordes.
  const clasesCombinadas2 = `inline-block text-center p-4 border border-solid border-azul-custom bg-fondo-oscuro/90 w-full md:max-w-[550px] h-auto ${
    className || ""
  }`;

  return <div className={clasesCombinadas2}>{children}</div>;
}

export default ContenedorLayou2;
