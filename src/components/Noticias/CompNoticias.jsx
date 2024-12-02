// PFI | FULL STACK AVANZADO - Consigna de trabajo final integrador.
// Este archivo define un componente React que muestra noticias, asegurando que todos los campos necesarios estén presentes antes de renderizar.

import React from "react";

function CompNoticias({ title, description, url, imageUrl }) {
  // Condición para verificar la presencia y no vacuidad de los campos 'title' y 'description'
  if (
    !title ||
    !description ||
    title.trim() === "" ||
    description.trim() === ""
  ) {
    return null; // No renderiza nada si no cumplen los criterios
  }

  return (
    <div className="shadow-md p-6 mb-4 flex flex-col items-center text-white bg-violeta-marca bg-opacity-30 rounded-lg">
      {/* Renderiza la imagen si existe una URL válida */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded mb-4" // Estilos para la imagen de la noticia
        />
      )}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2> // Título de la
        noticia
        <p className="mb-4 text-l">{description}</p> // Descripción breve de la
        noticia
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violeta-marca font-semibold hover:underline"
        >
          Leer más // Enlace para leer la noticia completa
        </a>
      </div>
    </div>
  );
}

export default CompNoticias;
