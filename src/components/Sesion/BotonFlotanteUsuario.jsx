// PFI | FULL STACK AVANZADO - Consigna de trabajo final integrador.
// Este archivo implementa un botón flotante de usuario que gestiona la visibilidad del navbar y modal de autenticación en la aplicación React.

import React, { useContext, useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import ModalAutentificacion from "./ModalAutentificacion";
import NavbarUsuario from "./NavbarUsuario";
import { AuthContext } from "./AuthContext";

const BotonFlotanteUsuario = () => {
  const { isAuthenticated, user, login, logout } = useContext(AuthContext);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false); // Controla la visibilidad del Navbar
  const [isModalVisible, setIsModalVisible] = useState(false); // Controla la visibilidad del modal de autenticación
  const [lastScrollY, setLastScrollY] = useState(0); // Mantiene el último valor de scroll Y para determinar la dirección del scroll

  // Efecto para ocultar el Navbar al hacer scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavbarVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Efecto para mostrar automáticamente el Navbar al iniciar sesión
  useEffect(() => {
    if (isAuthenticated) {
      setIsNavbarVisible(true);
    }
  }, [isAuthenticated]);

  // Función para alternar la visibilidad del Navbar
  const toggleNavbar = () => {
    if (isAuthenticated) {
      setIsNavbarVisible(prev => !prev);
    } else {
      setIsModalVisible(true);
    }
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    logout();
    setIsNavbarVisible(false);
  };

  return (
    <div>
      {/* Botón flotante con ícono de usuario */}
      <button
        className="fixed bottom-32 right-4 bg-gradiente-marca text-white p-4 rounded-full shadow-lg hover:bg-violeta-marca/90 transition-colors flex items-center justify-center z-50 cursor-pointer"
        onClick={toggleNavbar}
      >
        <FaUserCircle className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
      </button>

      {/* Componente de NavbarUsuario, se muestra si el usuario está autenticado */}
      {isAuthenticated && (
        <NavbarUsuario
          isVisible={isNavbarVisible}
          user={user}
          onLogout={handleLogout}
        />
      )}

      {/* Modal para autenticación, se muestra si el usuario no está autenticado y el modal es visible */}
      {isModalVisible && (
        <ModalAutentificacion
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onAuthSuccess={(userData) => {
            login(userData.token, userData); // Inicia sesión y actualiza el contexto
            setIsModalVisible(false);
            setIsNavbarVisible(true);
          }}
        />
      )}
    </div>
  );
};

export default BotonFlotanteUsuario;
