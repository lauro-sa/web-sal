import React from "react";
import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import Contenedor from "../components/Contenedores/Contenedor";
import LineaDeTiempo from "../components/LineaDeTiempo";

function SobreMi() {
  return (
    <ContenedorPagina className="flex justify-center items-center min-h-screen px-4">
      <Contenedor className="text-center mt-16 mb-16">
        <h1 className="mt-16 ">Sobre Mí</h1>
        <p className="my-8 text-gray-600">
          ¡Hola! Soy un apasionado desarrollador que disfruta creando soluciones elegantes y eficientes.
          Aquí encontrarás un recorrido por mi trayectoria profesional y educativa.
        </p>
        <p className="my-8 text-gray-700">
          Soy muy autodidacta y siempre estoy en busca de nuevas oportunidades para aprender y crecer. Me nutro de una amplia variedad de recursos en línea para mantenerme actualizado con las últimas tecnologías y mejores prácticas en desarrollo web.
        </p>
        <p className="mb-16 text-gray-700">
          Desde aprender nuevas tecnologías hasta enfrentar desafíos en proyectos, siempre busco mejorar y crecer.
          Echa un vistazo a mi línea de tiempo para conocer más sobre mis logros y experiencias.
        </p>
        <LineaDeTiempo />
      </Contenedor>
    </ContenedorPagina>
  );
}

export default SobreMi;
