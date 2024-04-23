import React from "react";

function ContenedorPagina({ children, className }) {
  // Asegúrate de que los valores de padding-top son válidos en Tailwind CSS
  const clasesCombinadas = `w-full text-center pt-14 ${className || ""}`;

  return <div className={clasesCombinadas}>{children}</div>;
}

export default ContenedorPagina;
