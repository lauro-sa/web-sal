import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import RedesSociales from "./RedesSociales";
import logo from '../assets/img/logo-sal-3.png';



function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Los iconos en un array de strings
  const iconosDeseados = ["email", "linkedin", "github"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY === 0) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "text-violeta-marca font-semibold"
      : "hover:text-violeta-marca";
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
                  ${isScrolled
          ? "bg-black/20 backdrop-blur-xl rounded-xl mt-4"
          : "bg-transparent md:w-full"
        }
                  ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center w-full">
        {/* Logo en mobile y desktop, visible solo si no se ha hecho scroll */}
        {!isScrolled && (
          <Link to="/" className="flex md:hidden items-center mt-4">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto mr-2"
            />
            <h1 className="animated-text text-l uppercase tracking-wider">
              S7ian Code
            </h1>
          </Link>
        )}

        {/* Logo en desktop */}
        {!isScrolled && (
          <Link to="/" className="hidden md:flex items-center w-40">
            <img
              src={logo}
              alt="Logo"
              className="md:block hidden h-8 w-auto"
            />
            <h1 className="animated-text text-l uppercase tracking-wider mx-1">
              S7ian Code
            </h1>
          </Link>
        )}

        {/* Navigation Links */}
        <ul className="flex space-x-4 py-4">
          <li>
            <Link to="/" className={`text-sm md:text-base ${getNavLinkClass("/")}`}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/sobre-mi"
              className={`text-sm md:text-base ${getNavLinkClass("/sobre-mi")}`}
            >
              SobreMí
            </Link>
          </li>
          <li>
            <Link
              to="/proyectos"
              className={`text-sm md:text-base ${getNavLinkClass("/proyectos")}`}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              to="/laboratorio"
              className={`text-sm md:text-base ${getNavLinkClass("/laboratorio")}`}
            >
              Laboratorio
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className={`text-sm md:text-base ${getNavLinkClass("/contacto")}`}
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Button on the right */}
        {!isScrolled && (
          <div className="hidden md:flex w-40 justify-end items-center">
            <button className="hidden px-4 py-2 text-center text-[10px] md:text-sm tracking-wider font-bold rounded-xl border text-black/80 bg-violeta-marca border-texto-claro hover:border-violeta-marca hover:bg-texto-claro transition-colors">
              Contactame
            </button>
            <RedesSociales iconsToShow={iconosDeseados} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
