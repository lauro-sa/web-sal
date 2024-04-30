import React, { useState } from "react";
import "../estilos.css";
import TransicionDeMovimiento from "./TransicionDeMovimiento";
import ModalProyectos from "./ModalProyectos";
import { proyectos } from "../config/datos";

function InfoProyectos() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <TransicionDeMovimiento type="entrarDesdeCentro">
      <div className="container mx-auto p-0 md:p-4 ">
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          {proyectos.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center rounded-md shadow-md p-2 transition-all duration-300 ease-in-out border border-solid border-azul-custom hover:border-violeta-marca hover:bg-violeta-marca/5 hover:scale-105 md:mb-6 cursor-pointer"
              onClick={() => openModal(project)}
              onMouseEnter={() =>
                (document.getElementById(`image-${project.id}`).style.opacity =
                  "1")
              }
              onMouseLeave={() =>
                (document.getElementById(`image-${project.id}`).style.opacity =
                  "0.5")
              }
            >
              <img
                id={`image-${project.id}`}
                src={project.images[0]}
                alt={project.title}
                className="rounded-md h-40 w-full object-cover"
                style={{ opacity: 0.4, transition: "opacity 0.3s ease-in-out" }}
              />
              <h2 className="text-sm md:text-md font-bold my-2">
                {project.title}
              </h2>
              <p className="text-xs">{project.tecnologias}</p>
            </div>
          ))}
        </div>
        <ModalProyectos project={selectedProject} onClose={closeModal} />
      </div>
    </TransicionDeMovimiento>
  );
}

export default InfoProyectos;
