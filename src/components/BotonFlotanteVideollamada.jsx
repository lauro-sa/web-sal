import React, { useState, useEffect } from "react";
import { HiVideoCamera } from "react-icons/hi";
import ModalCustom from "./ModalCustom";
import FormularioVideollamada from "./FormularioVideollamada.jsx";

const BotonFlotanteVideollamada = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [savedData, setSavedData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("videoCallData");
    if (storedData) {
      setSavedData(JSON.parse(storedData));
    }
  }, [isModalVisible]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const resetData = () => {
    localStorage.removeItem("videoCallData");
    setSavedData(null);
  };

  return (
    <div>

      <button
        className="fixed bottom-16 right-4 bg-gradiente-marca text-white p-4 rounded-full shadow-lg hover:bg-violeta-marca/90 transition-colors flex items-center justify-center z-100 cursor-pointer"
        onClick={toggleModal}
      >
        <HiVideoCamera className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
      </button>

      <ModalCustom isVisible={isModalVisible} onClose={toggleModal}>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Video Consulta
          </h2>
          {savedData ? (
            <div className="text-white space-y-4">
              <h3 className="text-md font-medium">Resumen de la cita:</h3>

              <div className="bg-gray-900 rounded-lg p-4 w-64">
                <h4 className="text-sm font-semibold text-left mb-2">Datos Personales:</h4>
                <div className="flex flex-col items-start">
                  <p>{savedData.nombre}</p>
                  <p>{savedData.correo}</p>
                </div>
              </div>


              <div className="bg-gray-900 rounded-lg p-4 w-64">
                <h4 className="text-sm font-semibold text-left mb-2">Fecha seleccionada:</h4>
                <p>
                  <span className="font-medium"></span>{" "}
                  {savedData.fecha
                    ? new Date(savedData.fecha).toLocaleDateString("es-ES", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                    : "No seleccionada"}
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 w-64">
                <h4 className="text-sm font-semibold text-left mb-2">Servicios Solicitados:</h4>
                <ul className="list-disc ml-5 text-left">
                  {savedData.servicios.length > 0 ? (
                    savedData.servicios.map((service) => (
                      <li key={service}>{service}</li>
                    ))
                  ) : (
                    <li>No seleccionados</li>
                  )}
                </ul>
              </div>

              <button
                onClick={resetData}
                className="mt-4 px-4 py-2 text-center text-sm uppercase tracking-wider font-bold rounded-xl border border-red-500 hover:border-red-500 hover:bg-red-500/30 hover:text-white transition-colors"
              >
                Reiniciar
              </button>
            </div>
          ) : (
            <FormularioVideollamada onClose={toggleModal} />
          )}
        </div>
      </ModalCustom>
    </div>
  );

};

export default BotonFlotanteVideollamada;
