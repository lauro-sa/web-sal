import React, { useRef, useState, useEffect } from "react";

// Componentes personalizados
import InfoPrincipal from "../components/InfoPrincipal";
import LayouInfoSal from "../components/LayouInfoSal";
import InfoServicios from "../components/InfoServicios";
import LayouHabilidades from "../components/LayouHabilidades";
import LayouProyectos from "../components/LayouProyectos";

// Función de easing para el scroll suave, usando quínticos para mayor suavidad
function alivioEntradaSalidaQuint(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t * t * t + 2) + b;
}

function Inicio() {
  const refContenedor = useRef(null);
  const inicioToqueRef = useRef(0);
  const [estaDesplazando, establecerEstaDesplazando] = useState(false);

  // Controla el inicio del desplazamiento suave en función de la dirección del scroll
  const manejarDesplazamiento = (direccion) => {
    if (estaDesplazando) return; // Previene múltiples desplazamientos simultáneos

    establecerEstaDesplazando(true);
    const alturaSeccion = window.innerHeight;
    const desplazamientoActual = refContenedor.current.scrollTop;
    const desplazamientoObjetivo =
      direccion === "abajo"
        ? desplazamientoActual + alturaSeccion
        : desplazamientoActual - alturaSeccion;

    desplazamientoSuaveHacia(
      refContenedor.current,
      desplazamientoObjetivo,
      1500
    ); // Duración de 1500 ms para mayor suavidad
  };

  // Realiza el desplazamiento suave al objetivo
  function desplazamientoSuaveHacia(elemento, objetivo, duracion) {
    const inicio = elemento.scrollTop;
    const cambio = objetivo - inicio;
    let tiempoActual = 0;
    const incremento = 20;

    const animarDesplazamiento = () => {
      tiempoActual += incremento;
      const val = alivioEntradaSalidaQuint(
        tiempoActual,
        inicio,
        cambio,
        duracion
      );
      elemento.scrollTop = val;
      if (tiempoActual < duracion) {
        requestAnimationFrame(animarDesplazamiento);
      } else {
        establecerEstaDesplazando(false); // Restablece el estado de desplazamiento
      }
    };

    requestAnimationFrame(animarDesplazamiento);
  }

  // Configura los manejadores de eventos para 'wheel' y eventos táctiles
  useEffect(() => {
    const manejarRueda = (evento) => {
      evento.preventDefault();
      manejarDesplazamiento(evento.deltaY > 0 ? "abajo" : "arriba");
    };

    const manejarInicioToque = (evento) => {
      inicioToqueRef.current = evento.touches[0].clientY;
    };

    const manejarMovimientoToque = (evento) => {
      evento.preventDefault();
      const finToque = evento.touches[0].clientY;
      if (inicioToqueRef.current > finToque + 5) {
        manejarDesplazamiento("abajo");
      } else if (inicioToqueRef.current < finToque - 5) {
        manejarDesplazamiento("arriba");
      }
    };

    const contenedor = refContenedor.current;
    contenedor.addEventListener("wheel", manejarRueda, { passive: false });
    contenedor.addEventListener("touchstart", manejarInicioToque, {
      passive: false,
    });
    contenedor.addEventListener("touchmove", manejarMovimientoToque, {
      passive: false,
    });

    return () => {
      contenedor.removeEventListener("wheel", manejarRueda);
      contenedor.removeEventListener("touchstart", manejarInicioToque);
      contenedor.removeEventListener("touchmove", manejarMovimientoToque);
    };
  }, []);

  return (
    <div
      ref={refContenedor}
      className="h-screen overflow-y-scroll"
      style={{ scrollBehavior: "auto" }}
    >
      <div className="h-screen flex flex-col items-center justify-center">
        <InfoPrincipal />
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
        <LayouInfoSal />
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
        <InfoServicios />
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
        <LayouHabilidades />
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
        <LayouProyectos />
      </div>
    </div>
  );
}

export default Inicio;
