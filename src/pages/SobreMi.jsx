import React from "react";
import ContenedorPagina from "../components/Contenedores/ContenedorPagina";

import LayouInfoSal from "../components/LayouInfoSal";

function SobreMi() {
  return (
    <ContenedorPagina className="px-4">
      {" "}
      <h1 className="mt-16">Sobre Mi</h1>
      <p className="my-8">Aquí podras leer infirmacion de mi carrera.</p>
      <div className=" w-80 h-96 m-24 bg-slate-600"></div>
      <div className=" w-80 h-96 m-24 bg-slate-600"></div>
      <div className=" w-80 h-96 m-24 bg-slate-600"></div>
      <div className=" w-80 h-96 m-24 bg-slate-600"></div>
      <div className=" w-80 h-96 m-24 bg-slate-600"></div>
    </ContenedorPagina>
  );
}

export default SobreMi;
