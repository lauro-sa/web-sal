// Navbar.jsx

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Obtiene la ubicación actual

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Función para aplicar estilo condicional
  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "text-violeta-marca font-semibold"
      : "hover:text-violeta-marca";
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 p-4 transition-all duration-500 ease-in-out
                  ${
                    isScrolled
                      ? "bg-white/25 backdrop-blur-xl rounded-xl w-auto mt-5"
                      : "bg-transparent bg-slate-600 "
                  }
                  ${
                    isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                  }`}
    >
      <ul className="flex justify-center space-x-4 tracking-wider">
        <li>
          <Link
            to="/"
            className={`text-sm md:text-base ${getNavLinkClass("/")}`}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/sobre-mi"
            className={`text-sm md:text-base ${getNavLinkClass("/sobre-mi")}`}
          >
            Sobre Mí
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
            className={`text-sm md:text-base ${getNavLinkClass(
              "/laboratorio"
            )}`}
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
    </nav>
  );
}

export default Navbar;
