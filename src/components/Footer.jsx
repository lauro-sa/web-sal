import React, { useState, useRef, useEffect } from "react";

// Componentes
import RedesSociales from "./RedesSociales";
import ModalCustom from "./ModalCustom";
import Formulario from "./Formulario/Formulario";

// Activos
import logo from '../assets/img/logo-01.png';

// Estilos
import "../estilos.css";

const Footer = () => {
  const referenciaAlPie = useRef(null);
  const [estaAbierto, setEstaAbierto] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const animacionEnCurso = useRef(false);

  const iconosDeseados = [
    "email",
    "linkedin",
    "whatsapp",
    "github",
    "instagram",
    "formulario",
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const alternarPie = () => {
    setEstaAbierto(!estaAbierto);
  };

  const activarAnimacion = () => {
    if (!estaAbierto && !animacionEnCurso.current) {
      animacionEnCurso.current = true;
      referenciaAlPie.current.classList.add("jello-vertical");
      setTimeout(() => {
        referenciaAlPie.current.classList.remove("jello-vertical");
        animacionEnCurso.current = false;
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
  }, [estaAbierto]);

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

  const onMouseEnterHandler = () => {
    if (!estaAbierto) {
      referenciaAlPie.current.classList.add("jello-hover");
    }
  };

  const onMouseLeaveHandler = () => {
    if (referenciaAlPie.current) {
      referenciaAlPie.current.classList.remove("jello-hover");
    }
  };

  return (
    <div className="flex justify-center items-center fixed -bottom-3 left-0 right-0 z-50">
      <div
        ref={referenciaAlPie}
        className="max-w-[98%] md:max-w-[800px] w-full p-0.5 transition-all duration-300 ease-in-out"
        onClick={alternarPie}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <div className="py-2 bg-fondo-oscuro border-t-2 border-l-2 border-r-2 rounded-t-lg borde-gradiente-hover border-azul-custom">
          <div className="h-11 border-b border-azul-custom flex justify-between items-center px-4 cursor-pointer rounded-t-lg">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="md:block hidden h-5 w-auto"
              />
              <span className="w-28 text-sm md:ml-1">S7ian Code</span>
            </div>
            <span className="w-28 text-sm text-end">2024</span>
          </div>
          {estaAbierto && (
            <div className="h-20 flex items-center justify-center">
              <RedesSociales
                iconsToShow={iconosDeseados}
                animateIcons={true}
                toggleModal={toggleModal}
              />
            </div>
          )}
        </div>
      </div>

      {/* Modal para el formulario */}
      <ModalCustom isVisible={isModalOpen} onClose={toggleModal}>
        <Formulario onClose={toggleModal} />
      </ModalCustom>
    </div>
  );
};

export default Footer;
