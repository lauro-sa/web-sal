import React from "react";

function CompNoticias({ title, description, url, imageUrl }) {
  // Condición: Verificar que title y description existan y no estén vacíos o solo con espacios
  if (!title || !description || title.trim() === "" || description.trim() === "") {
    return null;
  }

  return (
    <div className="shadow-md rounded p-6 mb-4 flex flex-col items-center text-white bg-violeta-marca bg-opacity-30 rounded-lg">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded mb-4" // Ajuste de tamaño de imagen
        />
      )}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4 text-l">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violeta-marca font-semibold hover:underline"
        >
          Leer más
        </a>
      </div>
    </div>
  );
}

export default CompNoticias;
