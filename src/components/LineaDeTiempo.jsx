import React from 'react';
import { HiCalendar } from 'react-icons/hi';

const eventos = [
  { 
    año: 'En curso', 
    tema: 'Formación',
    titulo: 'Diplomatura Full Stack',
    descripcion: 'Diplomatura en Programación Full Stack - UTN Buenos Aires' 
  },
  { 
    año: '2024', 
    tema: 'Proyecto',
    titulo: 'Web Marketing España',
    descripcion: 'Desarrollo de la página web de una empresa de marketing para España, realizada con React.' 
  },
  { 
    año: 'nov. 2023', 
    tema: 'Formación',
    titulo: 'Especialización React JS',
    descripcion: 'Desarrollador Web en React JS - Argentina Programa 4.0' 
  },
  { 
    año: '2023', 
    tema: 'Proyecto',
    titulo: 'PWA Gestión de Servicios',
    descripcion: 'Proyecto de una PWA para una empresa de servicios, gestionada completamente por mí. La PWA permite agendar clientes, realizar cotizaciones y agendar eventos con hasta 5 usuarios. Realizada con React.' 
  },
  { 
    año: 'feb. 2023', 
    tema: 'Formación',
    titulo: 'Curso Frontend Avanzado',
    descripcion: 'Desarrollo Frontend - Argentina Programa 4.0' 
  },
  { 
    año: 'jul. 2022', 
    tema: 'Formación',
    titulo: 'Curso Se Programar',
    descripcion: 'Curso Se Programar del trayecto formativo INTI' 
  },
  { 
    año: 'oct. 2021', 
    tema: 'Formación',
    titulo: 'Diplomatura en Ads',
    descripcion: 'Diplomatura en Publicidad y Ads para Social Media - UTN Buenos Aires' 
  },
  { 
    año: 'jun. 2021', 
    tema: 'Formación',
    titulo: 'Certificación Google Ads',
    descripcion: 'Google Ads - Publicidad con Búsqueda avanzada - UTN Buenos Aires' 
  },
  { 
    año: 'abr. 2020', 
    tema: 'Formación',
    titulo: 'Fundamentos IoT',
    descripcion: 'Fundamentos IoT - EducacionIT' 
  },
  { 
    año: 'dic. 2018', 
    tema: 'Formación',
    titulo: 'Certificación FrontEnd',
    descripcion: 'Certificación en Programación Inicial FrontEnd - Digital House' 
  },
  { 
    año: '2015 - 2021', 
    tema: 'Proyecto',
    titulo: 'Desarrollo Web Empresa',
    descripcion: 'Desarrollo de la web de una empresa de servicios. Realicé el diseño y la funcionalidad de la web, evolucionando desde HTML y CSS puro hasta React JS y SCSS.' 
  },
];

function LineaDeTiempo() {
  return (
    <div className="flex flex-col items-start space-y-8">
      {eventos.map((evento, index) => (
        <div key={index} className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <HiCalendar className="text-violeta-marca w-4 h-4" />
          </div>
          <div className="flex-grow text-start">
            <p className="text-sm text-gray-500">{evento.año}</p>
            <h3 className="text-lg font-semibold text-gray-800">{evento.tema}</h3>
            <p className="text-gray-600 font-semibold">{evento.titulo}</p>
            <p className="text-gray-600">{evento.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LineaDeTiempo;
