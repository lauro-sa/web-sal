import React from "react";

// Importar el hook para navegación
import { useNavigate } from "react-router-dom"; 

// Componentes
import ContenedorLayou3 from "./Contenedores/ContenedorLayou3";
import ContenedorLayou4 from "./Contenedores/ContenedorLayou4";
import InfoProyectos from "./InfoProyectos";

function LayouProyectos() {
  const navigate = useNavigate(); // Inicializar la función de navegación

  const handleNavigateToProjects = () => {
    navigate("/proyectos"); // Navegar a la página de proyectos
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center m-4">
      <ContenedorLayou3 className="flex flex-col justify-center items-center ">
        <p
          className="text-lg uppercase tracking-wider mb-4 text-violeta-marca cursor-pointer"
          onClick={handleNavigateToProjects} // Añadir la función de navegación al hacer clic
        >
          Proyectos
        </p>
        <p className="text-sm tracking-wider md:text-left">
          Desde aplicaciones web interactivas (PWA) y plataformas de e-commerce hasta sitios corporativos y diseño de identidad visual. Cada proyecto es una demostración de soluciones a medida que combinan diseño funcional con tecnología robusta. Explora una selección de mis trabajos para ver mi enfoque en acción.
        </p>
      </ContenedorLayou3>
      <ContenedorLayou4 className="mb-12">
        <InfoProyectos />
      </ContenedorLayou4>
    </div>
  );
}

export default LayouProyectos;
