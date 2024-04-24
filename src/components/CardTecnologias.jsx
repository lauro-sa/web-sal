import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

const CardTecnologias = ({ tech, onClick }) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detecta si el dispositivo es táctil una sola vez al montar el componente
    const checkTouchDevice = () =>
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
    setIsTouchDevice(checkTouchDevice());
  }, []);

  const handleTouchStart = () => {
    setIsTouched(true);
    setTimeout(() => setIsTouched(false), 500);
  };

  return (
    <motion.div
      className="flex flex-col items-center rounded-lg px-2 shadow-md transition-all duration-300 bg-[rgba(126,126,126,0.11)]  border-azul-custom hover:border-violeta-marca hover:bg-violeta-marca/20 hover:scale-105  cursor-pointer "
      variants={itemVariants}
      whileHover={!isTouchDevice ? { scale: 1.1 } : {}}
      onClick={() => {
        onClick(tech);
        if (isTouchDevice) handleTouchStart();
      }}
      whileTap={isTouchDevice ? { scale: 1.1 } : {}}
    >
      <div
        className="w-full h-12 my-2 flex justify-center items-center"
        style={{ transform: isTouched ? "scale(0.8)" : "scale(1)" }}
      >
        <tech.Icon className="w-12 md:w-12" />
      </div>
      <span className="font-semibold text-md mb-2">{tech.name}</span>
    </motion.div>
  );
};

export default CardTecnologias;
