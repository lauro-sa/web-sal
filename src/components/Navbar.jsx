import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Sesion/AuthContext";
import RedesSociales from "./RedesSociales";
import logo from "../assets/img/logo-01.png";

function Navbar() {
  const { isAuthenticated } = useContext(AuthContext); // Acceder al estado de autenticación
  const navigate = useNavigate();
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [vibrate, setVibrate] = useState(null);

  const iconosDeseados = ["email", "linkedin", "github"];

  // Manejo de scroll para ocultar o mostrar el navbar
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

  const getNavLinkClass = (path) =>
    location.pathname === path
      ? "text-violeta-marca font-semibold"
      : "hover:text-violeta-marca";

  const handleRestrictedClick = (e, route) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setVibrate(route);

      // Redirige al usuario a la página de inicio de sesión después de vibrar
      setTimeout(() => {
        setVibrate(null);
        navigate("/inicio-sesion", { state: { from: route } });
      }, 1000);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
        ${
          isScrolled && lastScrollY > 30
            ? "bg-black/20 backdrop-blur-xl rounded-xl mt-4 border border-violeta-marca/50 shadow-md shadow-violeta-marca/30"
            : "bg-transparent md:w-full border-none shadow-none"
        }
        ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center w-full">
        {/* Logo en mobile y desktop */}
        {!isScrolled && (
          <Link to="/" className="flex md:hidden items-center mt-4">
            <img src={logo} alt="Logo" className="h-8 w-auto mr-1" />
            <h1 className="animated-text text-xl md:text-l uppercase tracking-wider">
              S7ian Code
            </h1>
          </Link>
        )}

        {!isScrolled && (
          <Link to="/" className="hidden md:flex items-center w-40">
            <img src={logo} alt="Logo" className="md:block hidden h-8 w-auto" />
            <h1 className="animated-text text-l uppercase tracking-wider mx-1">
              S7ian Code
            </h1>
          </Link>
        )}

        {/* Navigation Links */}
        <ul className="flex space-x-4 py-4">
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
              SobreMí
            </Link>
          </li>
          <li>
            <Link
              to="/proyectos"
              className={`text-sm md:text-base ${getNavLinkClass(
                "/proyectos"
              )}`}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              to="/laboratorio"
              onClick={(e) => handleRestrictedClick(e, "/laboratorio")}
              className={`text-sm md:text-base ${getNavLinkClass(
                "/laboratorio"
              )} ${
                vibrate === "/laboratorio" ? "text-red-500 animate-pulse" : ""
              }`}
            >
              Laboratorio
            </Link>
          </li>
          <li>
            <Link
              to="/noticias"
              onClick={(e) => handleRestrictedClick(e, "/noticias")}
              className={`text-sm md:text-base ${getNavLinkClass(
                "/noticias"
              )} ${
                vibrate === "/noticias" ? "text-red-500 animate-pulse" : ""
              }`}
            >
              Noticias
            </Link>
          </li>
          <li className="relative flex items-center">
            <Link
              to="/contacto"
              className={`text-sm md:text-base ${getNavLinkClass("/contacto")}`}
            >
              Contacto
            </Link>
            {isAuthenticated && (
              <span className="absolute -right-5 top-[50%] transform -translate-y-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-pin"></span>
            )}
          </li>
        </ul>

        <div className="hidden md:flex w-40 justify-end items-center">
          <RedesSociales iconsToShow={iconosDeseados} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
