import React from 'react';

const eventos = [
  { 
    año: 'En curso', 
    descripcion: 'Diplomatura en Programación Full Stack - UTN Buenos Aires' 
  },
  { 
    año: '2024', 
    descripcion: 'Desarrollo de la página web de una empresa de marketing para España, realizada con React.' 
  },
  { 
    año: 'nov. 2023', 
    descripcion: 'Desarrollador Web en React JS - Argentina Programa 4.0' 
  },
  { 
    año: '2023', 
    descripcion: 'Proyecto de una PWA para una empresa de servicios, gestionada completamente por mí. La PWA permite agendar clientes, realizar cotizaciones y agendar eventos con hasta 5 usuarios. Realizada con React.' 
  },
  { 
    año: 'feb. 2023', 
    descripcion: 'Desarrollo Frontend - Argentina Programa 4.0' 
  },
  { 
    año: 'jul. 2022', 
    descripcion: 'Curso Se Programar del trayecto formativo INTI' 
  },
  { 
    año: 'oct. 2021', 
    descripcion: 'Diplomatura en Publicidad y Ads para Social Media - UTN Buenos Aires' 
  },
  { 
    año: 'jun. 2021', 
    descripcion: 'Google Ads - Publicidad con Búsqueda avanzada - UTN Buenos Aires' 
  },
  { 
    año: 'abr. 2020', 
    descripcion: 'Fundamentos IoT - EducacionIT' 
  },
  { 
    año: 'dic. 2018', 
    descripcion: 'Certificación en Programación Inicial FrontEnd - Digital House' 
  },
  { 
    año: '2015 - 2021', 
    descripcion: 'Desarrollo de la web de una empresa de servicios. Realicé el diseño y la funcionalidad de la web, evolucionando desde HTML y CSS puro hasta React JS y SCSS.' 
  },

];

function LineaDeTiempo() {
  return (
    <div className="flex flex-col space-y-8">
      {eventos.map((evento, index) => (
        <div key={index} className="flex items-center">
          <div className="flex-shrink-0 w-24 text-center pr-1 font-semibold text-gray-700">
            {evento.año}
          </div>
          <div className="flex-grow pl-4 border-l-2 border-gray-300">
            <p className="text-lg text-gray-600">{evento.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LineaDeTiempo;
