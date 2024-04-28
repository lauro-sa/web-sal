import React from "react";
import ContenedorPagina from "../components/Contenedores/ContenedorPagina";

// Componentes herramientas
import CardGeneradorContrasenas from "../components/LabComponentes/GeneradorDeContraseñas/CardGeneradorContrasenas";
import CardGeneradorQr from "../components/LabComponentes/GeneradorDeQr/CardGeneradorQr";
import CardConversorAudio from "../components/LabComponentes/ConversorAudio/CardConversorAudio";
import CardConversorImg from "../components/LabComponentes/ConversorImg/CardConversorImg";

function Laboratorio() {
  return (
    <ContenedorPagina className="px-4">
      {" "}
      <h1 className="mt-16">Laboratorio</h1>
      <p className="my-8">
        Aquí puedes poner información de contacto o un formulario de contacto.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center ">
        <CardGeneradorContrasenas />
        <CardGeneradorQr />
        <CardConversorAudio />
        <CardConversorImg />
      </div>
    </ContenedorPagina>
  );
}

export default Laboratorio;
