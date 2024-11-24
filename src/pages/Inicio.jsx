// Componentes
import FondoParticulasX from "../components/FondoParticulasX";
import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import InfoPrincipal from "../components/InfoPrincipal";
import LayouInfoSal from "../components/LayouInfoSal";
import InfoServicios from "../components/InfoServicios";
import LayouHabilidades from "../components/LayouHabilidades";
import LayouProyectos from "../components/LayouProyectos";
import BotonFlotanteVideollamada from "../components/VideoConsulta/BotonFlotanteVideollamada";

function Inicio() {
  return (
    <div className="relative min-h-screen">
      <FondoParticulasX />
      <ContenedorPagina className="relative z-10">
        {/* Botón flotante específico para videollamadas */}
        <BotonFlotanteVideollamada />

        <div className="flex justify-center items-center min-h-screen">
          <InfoPrincipal />
        </div>
        <div className="flex justify-center items-center mb-80">
          <LayouInfoSal />
        </div>
        <div className="flex justify-center items-center mb-80">
          <InfoServicios />
        </div>
        <div className="flex justify-center items-center mb-80">
          <LayouHabilidades />
        </div>
        <div className="flex justify-center items-center mb-24">
          <LayouProyectos />
        </div>
      </ContenedorPagina>
    </div>
  );
}

export default Inicio;
