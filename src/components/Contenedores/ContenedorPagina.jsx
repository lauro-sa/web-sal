import React from "react";

function ContenedorPagina({ children, className }) {
  // Añade 'mx-auto' para asegurar el centrado horizontal
  const clasesCombinadas = `w-full mx-auto text-center pt-14 max-w-screen-xl ${
    className || ""
  }`;
  return <div className={clasesCombinadas}>{children}</div>;
}

export default ContenedorPagina;
