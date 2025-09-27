import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "./Sesion/AuthContext";
import ModalAutentificacion from "./Sesion/ModalAutentificacion";
import logo from "../assets/img/logo-01.png";
import RedesSociales from "./RedesSociales";
import TransicionDeMovimiento from "./TransicionDeMovimiento";

function NavbarMobile() {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [esVisible, setEsVisible] = useState(true);
  const [ultimaPosicionScroll, setUltimaPosicionScroll] = useState(0);
  const [vibrar, setVibrar] = useState(null);
  const [esModalAuthVisible, setEsModalAuthVisible] = useState(false);

  const iconosDeseados = ["email", "linkedin", "github"];
  const enlacesMenu = [
    { to: "/", text: "Inicio" },
    { to: "/sobre-mi", text: "Sobre Mí" },
    { to: "/proyectos", text: "Proyectos" },
    { to: "/laboratorio", text: "Laboratorio", restringido: true },
    { to: "/noticias", text: "Noticias", restringido: true },
    { to: "/contacto", text: "Contacto" },
  ];

  const delayPerLink = 0.1;
  const socialIconsDelay = enlacesMenu.length * delayPerLink;

  useEffect(() => {
    const handleScroll = () => {
      const scrollYActual = window.scrollY;
      if (scrollYActual > ultimaPosicionScroll && scrollYActual > 200) {
        setEsVisible(false);
        setMenuAbierto(false);
      } else {
        setEsVisible(true);
      }
      setUltimaPosicionScroll(scrollYActual);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ultimaPosicionScroll]);

  useEffect(() => {
    if (menuAbierto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuAbierto]);

  const obtenerClaseEnlace = (ruta) =>
    location.pathname === ruta
      ? "text-violeta-marca font-semibold"
      : "hover:text-violeta-marca";

  const manejarClickRestringido = (e, ruta) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setVibrar(ruta);
      setTimeout(() => {
        setVibrar(null);
        setEsModalAuthVisible(true);
      }, 1500);
    }
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 bg-fondo-oscuro border-b border-violeta-marca/50 ${
          esVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
              <h1 className="animated-text text-xl ml-2 uppercase tracking-wider">
                S7ian Code
              </h1>
            </Link>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none z-50"
              >
                <span className="sr-only">Abrir menú principal</span>
                <svg className={`${menuAbierto ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ease-in-out bg-fondo-oscuro ${
          menuAbierto ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="absolute top-0 right-0 p-4">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
          >
            <span className="sr-only">Cerrar menú</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-4">
          {enlacesMenu.map((enlace, index) => (
            <TransicionDeMovimiento key={enlace.to} type="entrarArribaAbajo" delay={index * delayPerLink}>
              <Link
                to={enlace.to}
                onClick={(e) => {
                  if (enlace.restringido && !isAuthenticated) {
                    manejarClickRestringido(e, enlace.to);
                  } else {
                    // Cierra el menú con un pequeño retraso para permitir que la navegación se inicie
                    setTimeout(() => {
                      setMenuAbierto(false);
                    }, 150);
                  }
                }}
                className={`block px-3 py-2 rounded-md text-2xl font-medium ${obtenerClaseEnlace(enlace.to)} ${vibrar === enlace.to ? "animate-restricted" : ""}`}
              >
                {enlace.text}
              </Link>
            </TransicionDeMovimiento>
          ))}
           <div className={`pt-8 transition-opacity duration-500 ease-in-out ${menuAbierto ? 'opacity-100' : 'opacity-0'}`}>
            {menuAbierto && <RedesSociales iconsToShow={iconosDeseados} size="25" animateIcons={true} initialDelay={socialIconsDelay} />}
          </div>
        </div>
      </div>

      {esModalAuthVisible && (
        <ModalAutentificacion
          isVisible={esModalAuthVisible}
          onClose={() => setEsModalAuthVisible(false)}
        />
      )}
    </>
  );
}

export default NavbarMobile;
