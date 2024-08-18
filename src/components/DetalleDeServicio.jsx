import React from "react";

function DetalleDeServicio({ id, icon, title, description, description2, description3, images }) {
  return (
    <section id={id} className="mb-24 max-w-5xl mx-auto md:p-4 p-2 bg-violeta-marca bg-opacity-30 rounded-lg">
      <div className="mb-2 ml-2">
        <div className="flex items-center mb-4">
          <div className="mr-4 mt-4 w-16 h-16">{icon}</div> {/* Ajuste del tamaño del icono */}
        </div>
      </div>

      <div className="space-y-6">
        {/* Primer bloque de descripción e imagen */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col lg:w-1/2 text-left">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="text-l leading-relaxed text-white">{description}</p>
          </div>
          
          <div className="flex lg:w-1/2 items-center justify-center">
            <img
              src={images[0]}
              alt={`${title} - primer ejemplo`}
              className="w-full lg:w-1/2 h-auto object-cover rounded-lg shadow-lg"
              style={{
                maskImage: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)',
              }}
            />
          </div>
        </div>

        {/* Segundo bloque de descripción e imagen */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-4"> {/* Oculto en móviles */}
          {/* Primer div: Imagen 2 a la izquierda */}
          <div className="lg:w-1/3 flex-grow">
            <img
              src={images[1]}
              alt={`${title} - segundo ejemplo`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              style={{
                maskImage: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)',
              }}
            />
          </div>

          {/* Segundo div: Dos divs en columna */}
          <div className="lg:w-2/3 flex flex-col justify-between">
            {/* Primer div: Descripción 2 */}
            <div className="mb-4">
              <p className="text-sm text-start leading-relaxed text-white">{description2}</p>
            </div>

            {/* Segundo div: Fila con Imagen 3 a la izquierda y Descripción 3 a la derecha */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <p className="text-sm leading-relaxed text-white text-center lg:text-end lg:w-1/2">{description3}</p>
              <img
                src={images[2]}
                alt={`${title} - tercer ejemplo`}
                className="w-1/4 h-auto object-cover rounded-lg shadow-lg"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 80%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetalleDeServicio;
