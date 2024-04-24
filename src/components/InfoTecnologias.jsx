import React, { useState } from "react";

import ModalTechnology from "./ModalTechnology";
import { technologyData } from "../config/technologyData";
import { motion } from "framer-motion"; // Asegúrate de importar motion si no está importado

import "../estilos.css";
import TransicionDeMovimiento from "./TransicionDeMovimiento";
import CardTecnologias from "./CardTecnologias"; // Corregido el typo en el nombre del componente

const containerVariants = {
  // Definición de las variantes del contenedor
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5 },
  },
};

function InfoTecnologias() {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleCardClick = (tech) => {
    setSelectedTech(tech);
  };

  const handleCloseModal = () => {
    setSelectedTech(null);
  };

  return (
    <div className="">
      <ModalTechnology tech={selectedTech} onClose={handleCloseModal} />
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          className="grid grid-cols-3 grid-a md:grid-cols-4 gap-4 md:gap-8 m-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {technologyData.map((tech, index) => (
            <div
              key={index}
              className={`${tech.name === "HTML5" ? "hidden sm:block" : ""}`}
            >
              <CardTecnologias tech={tech} onClick={handleCardClick} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default InfoTecnologias;


