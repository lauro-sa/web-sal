import React, { useState, useEffect, useRef } from "react";
import RedesSociales from "./RedesSociales";
import "../estilos.css";

const Footer = () => {
  const referenciaAlPie = useRef(null);
  const [estaAbierto, setEstaAbierto] = useState(false);
  const [permitirAnimacion, setPermitirAnimacion] = useState(true);
  const animacionEnCurso = useRef(false);

  const iconosDeseados = [
    "email",
    "linkedin",
    "github",
    "whatsapp",
    "instagram",
  ];

  const alternarPie = () => {
    setEstaAbierto(!estaAbierto);
  };

  const activarAnimacion = () => {
    if (permitirAnimacion && !animacionEnCurso.current && !estaAbierto) {
      animacionEnCurso.current = true;
      referenciaAlPie.current.classList.add("jello-vertical");
      setTimeout(() => {
        referenciaAlPie.current.classList.remove("jello-vertical");
        animacionEnCurso.current = false;
        setPermitirAnimacion(false);
        setTimeout(() => setPermitirAnimacion(true), 300);
      }, 2500);
    }
  };

  const verificarFinal = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    return scrollTop + clientHeight >= scrollHeight;
  };

  const alDesplazar = (evento) => {
    if (estaAbierto) {
      setEstaAbierto(false); // Contrae el div al desplazarse
    }
    if (verificarFinal() && evento.deltaY > 0) {
      activarAnimacion();
    }
  };

  useEffect(() => {
    const handleScroll = (evento) => alDesplazar(evento);
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [estaAbierto]); // Agrega estaAbierto como dependencia

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        referenciaAlPie.current &&
        !referenciaAlPie.current.contains(event.target)
      ) {
        setEstaAbierto(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [referenciaAlPie]);

  return (
    <div className="flex justify-center items-center fixed -bottom-2 left-0 right-0">
      <div
        ref={referenciaAlPie}
        className="max-w-2xl w-full p-0.5 transition-all duration-300 ease-in-out"
        onClick={alternarPie}
      >
        <div className="py-2 bg-fondo-oscuro border-t-2 border-l-2 border-r-2 rounded-t-lg borde-gradiente-hover border-azul-custom">
          <div className="h-11 border-b border-azul-custom flex justify-between items-center px-4 cursor-pointer rounded-t-lg">
            <span className="w-28 text-sm text-center">Código S7ian</span>
            <span className="w-28 text-sm text-center">© - 2024</span>
          </div>
          {estaAbierto && (
            <div className="h-20 flex items-center justify-center">
              <RedesSociales iconsToShow={iconosDeseados} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
