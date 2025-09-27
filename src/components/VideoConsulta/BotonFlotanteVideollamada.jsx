import React, { useState, useEffect, useRef } from "react";
import { HiVideoCamera } from "react-icons/hi";
import { AnimatePresence } from "framer-motion";
import TarjetaVideollamada from "./TarjetaVideollamada";

const BotonFlotanteVideollamada = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [savedData, setSavedData] = useState(null);
  const [isButtonVisible, setIsButtonVisible] = useState(true); // Siempre visible por ahora

  const buttonRef = useRef(null);
  const cardRef = useRef(null);

  // Cargar datos guardados al montar el componente
  useEffect(() => {
    const storedData = localStorage.getItem("videoCallData");
    if (storedData) {
      setSavedData(JSON.parse(storedData));
    }
  }, []);

  // Cerrar la tarjeta al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cardRef.current && !cardRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsCardVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Ocultar la tarjeta al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isCardVisible) {
        setIsCardVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isCardVisible]);

  const handleAgendar = (data) => {
    const dataToSave = {
      ...data,
      fecha: data.fecha.toISOString(), // Guardar fecha en formato estándar
    };
    localStorage.setItem("videoCallData", JSON.stringify(dataToSave));
    setSavedData(dataToSave);
    alert(`¡Cita agendada para ${data.nombre}!`);
  };

  const handleReset = () => {
    localStorage.removeItem("videoCallData");
    setSavedData(null);
  };

  return (
    <div>
      {isButtonVisible && (
        <button
          ref={buttonRef}
          className="fixed bottom-16 right-4 bg-gradiente-marca text-white w-14 h-14 rounded-full shadow-lg hover:bg-violeta-marca/90 transition-all duration-300 flex items-center justify-center z-50 cursor-pointer active:scale-95"
          onClick={() => setIsCardVisible(!isCardVisible)}
        >
          <HiVideoCamera className="w-6 h-6" />
        </button>
      )}

      <div ref={cardRef}>
        <AnimatePresence>
            {isCardVisible && (
                <TarjetaVideollamada
                    isVisible={isCardVisible}
                    onAgendar={handleAgendar}
                    onClose={() => setIsCardVisible(false)}
                    savedData={savedData}
                    onReset={handleReset}
                />
            )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BotonFlotanteVideollamada;
