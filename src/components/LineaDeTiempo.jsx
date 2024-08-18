import React from 'react';
import { HiCalendar } from 'react-icons/hi';
import { eventos } from "../config/datos";


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
            <p className="text-gray-400 font-semibold">{evento.titulo}</p>
            <p className="text-gray-600">{evento.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LineaDeTiempo;
