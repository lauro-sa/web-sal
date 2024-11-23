import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import ModalAutentificacion from "./ModalAutentificacion";
import NavbarUsuario from "./NavbarUsuario";

const BotonFlotanteUsuario = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Verificar autenticación inicial
    const token = localStorage.getItem("token");
    if (token) {
      // Aquí podrías realizar una llamada para validar el token si es necesario
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setIsAuthenticated(!!token);
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Oculta el NavbarUsuario si haces scroll hacia abajo
      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleNavbar = () => {
    if (isAuthenticated) {
      setIsNavbarVisible((prev) => !prev); // Alterna la visibilidad del NavbarUsuario
    } else {
      setIsModalVisible(true); // Abre el modal de autenticación si no está autenticado
    }
  };

  const handleAuthSuccess = (userData) => {
    localStorage.setItem("token", userData.token); // Guarda el token
    localStorage.setItem("user", JSON.stringify(userData)); // Guarda el usuario
    setIsAuthenticated(true);
    setUser(userData);
    setIsModalVisible(false); // Cierra el modal después de autenticarse
    setIsNavbarVisible(true); // Fuerza la visibilidad del NavbarUsuario
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token
    localStorage.removeItem("user"); // Elimina el usuario
    setIsAuthenticated(false);
    setUser(null);
    setIsNavbarVisible(false); // Oculta el NavbarUsuario al cerrar sesión
  };

  return (
    <div>
      {/* Botón flotante */}
      <button
        className="fixed bottom-32 right-4 bg-gradiente-marca text-white p-4 rounded-full shadow-lg hover:bg-violeta-marca/90 transition-colors flex items-center justify-center z-50 cursor-pointer"
        onClick={toggleNavbar}
      >
        <FaUserCircle className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
      </button>

      {/* NavbarUsuario */}
      <NavbarUsuario
        user={user}
        isVisible={isNavbarVisible}
        onLogout={handleLogout}
      />

      {/* Modal de autenticación */}
      {isModalVisible && (
        <ModalAutentificacion
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      )}
    </div>
  );
};

export default BotonFlotanteUsuario;
