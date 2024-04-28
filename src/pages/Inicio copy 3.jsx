import React, { useRef, useState, useEffect } from "react";

// Componentes personalizados
import InfoPrincipal from "../components/InfoPrincipal";
import LayouInfoSal from "../components/LayouInfoSal";
import InfoServicios from "../components/InfoServicios";
import LayouHabilidades from "../components/LayouHabilidades";
import LayouProyectos from "../components/LayouProyectos";

function Inicio() {
  const refContenedor = useRef(null);
  const [claveUnica, setClaveUnica] = useState(0);

  // Realiza el desplazamiento suave al objetivo
  const desplazamientoSuaveHacia = (objetivo) => {
    const inicio = refContenedor.current.scrollTop;
    const duracion = 1500; // duración del scroll
    let tiempoActual = 0;
    const cambio = objetivo - inicio;
    const incremento = 20;

    const animarDesplazamiento = () => {
      tiempoActual += incremento;
      const tiempo = tiempoActual / duracion;
      const tiempoCubico = tiempo * tiempo * tiempo;
      const val = inicio + cambio * tiempoCubico;
      refContenedor.current.scrollTop = val;

      if (tiempoActual < duracion) {
        requestAnimationFrame(animarDesplazamiento);
      } else {
        // Esperar un momento antes de remontar para que se aprecie el scroll
        setTimeout(() => {
          setClaveUnica((prevKey) => prevKey + 1);
        }, -10);
      }
    };

    requestAnimationFrame(animarDesplazamiento);
  };

  const manejarDesplazamiento = (direccion) => {
    const alturaSeccion = window.innerHeight;
    const desplazamientoActual = refContenedor.current.scrollTop;
    const desplazamientoObjetivo =
      direccion === "abajo"
        ? desplazamientoActual + alturaSeccion
        : desplazamientoActual - alturaSeccion;

    desplazamientoSuaveHacia(desplazamientoObjetivo);
  };

  useEffect(() => {
    const manejarRueda = (evento) => {
      evento.preventDefault();
      const direccion = evento.deltaY > 0 ? "abajo" : "arriba";
      manejarDesplazamiento(direccion);
    };

    const contenedor = refContenedor.current;
    contenedor.addEventListener("wheel", manejarRueda, { passive: false });

    return () => {
      contenedor.removeEventListener("wheel", manejarRueda);
    };
  }, []);

  return (
    <div
      ref={refContenedor}
      className="h-screen overflow-y-scroll"
      style={{ scrollBehavior: "auto" }}
    >
      <div
        className="h-screen flex flex-col items-center justify-center"
        key={claveUnica + "-1"}
      >
        <InfoPrincipal />
      </div>
      <div
        className="h-screen flex flex-col items-center justify-center"
        key={claveUnica + "-2"}
      >
        <LayouInfoSal />
      </div>
      <div
        className="h-screen flex flex-col items-center justify-center"
        key={claveUnica + "-3"}
      >
        <InfoServicios />
      </div>
      <div
        className="h-screen flex flex-col items-center justify-center"
        key={claveUnica + "-4"}
      >
        <LayouHabilidades />
      </div>
      <div
        className="h-screen flex flex-col items-center justify-center"
        key={claveUnica + "-5"}
      >
        <LayouProyectos />
      </div>
    </div>
  );
}

export default Inicio;
