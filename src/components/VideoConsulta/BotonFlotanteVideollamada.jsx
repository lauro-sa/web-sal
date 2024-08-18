import React, { useState, useEffect } from "react";
import { HiVideoCamera } from "react-icons/hi";
import ModalCustom from "../ModalCustom.jsx";
import FormularioVideollamada from "./FormularioVideollamada.jsx";

const BotonFlotanteVideollamada = () => {
  // Estado para controlar la visibilidad del modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Estado para almacenar los datos guardados del localStorage
  const [savedData, setSavedData] = useState(null);
  // Estado para controlar la visibilidad del botón flotante
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  // useEffect para cargar los datos guardados desde el localStorage cuando se abre el modal
  useEffect(() => {
    const storedData = localStorage.getItem("videoCallData");
    if (storedData) {
      setSavedData(JSON.parse(storedData)); // Parsea los datos guardados y los almacena en el estado
    }
  }, [isModalVisible]); // Se ejecuta cada vez que cambia la visibilidad del modal

  // useEffect para controlar la visibilidad del botón en función del desplazamiento de la página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsButtonVisible(true); // Muestra el botón después de 200px de desplazamiento
      } else {
        setIsButtonVisible(false); // Oculta el botón si no se ha alcanzado el desplazamiento
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para alternar la visibilidad del modal
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Función para reiniciar los datos guardados, eliminando los datos del localStorage
  const resetData = () => {
    localStorage.removeItem("videoCallData"); // Elimina los datos del localStorage
    setSavedData(null); // Limpia el estado
  };

  return (
    <div>
      {/* Botón flotante para abrir el modal, visible solo después de 200px de desplazamiento */}
      {isButtonVisible && (
        <button
          className="fixed bottom-16 right-4 bg-gradiente-marca text-white p-4 rounded-full shadow-lg hover:bg-violeta-marca/90 transition-colors flex items-center justify-center z-100 cursor-pointer"
          onClick={toggleModal}
        >
          {/* Icono de cámara de video que se agranda al pasar el cursor */}
          <HiVideoCamera className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
        </button>
      )}

      {/* Modal personalizado que contiene el formulario o el resumen de la cita */}
      <ModalCustom isVisible={isModalVisible} onClose={toggleModal}>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Video Consulta
          </h2>
          {/* Si hay datos guardados, muestra el resumen de la cita */}
          {savedData ? (
            <div className="text-white space-y-4">
              <h3 className="text-md font-medium">Resumen de la cita:</h3>

              {/* Muestra los datos personales guardados */}
              <div className="bg-gray-900 rounded-lg p-4 w-64">
                <h4 className="text-sm font-semibold text-left mb-2">Datos Personales:</h4>
                <div className="flex flex-col items-start">
                  <p>{savedData.nombre}</p>
                  <p>{savedData.correo}</p>
                </div>
              </div>

              {/* Muestra la fecha seleccionada */}
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

              {/* Muestra los servicios seleccionados */}
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

              {/* Botón para reiniciar los datos guardados */}
              <button
                onClick={resetData}
                className="mt-4 px-4 py-2 text-center text-sm uppercase tracking-wider font-bold rounded-xl border border-red-500 hover:border-red-500 hover:bg-red-500/30 hover:text-white transition-colors"
              >
                Reiniciar
              </button>
            </div>
          ) : (
            // Si no hay datos guardados, muestra el formulario para agendar la videollamada
            <FormularioVideollamada onClose={toggleModal} />
          )}
        </div>
      </ModalCustom>
    </div>
  );
};

export default BotonFlotanteVideollamada;
