import React, { useContext, useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import ModalAutentificacion from "./ModalAutentificacion";
import NavbarUsuario from "./NavbarUsuario";
import { AuthContext } from "./AuthContext";

const BotonFlotanteUsuario = () => {
  const { isAuthenticated, user, login, logout } = useContext(AuthContext);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false); // Manejar visibilidad del navbar
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavbarVisible(false); // Ocultar cuando hacemos scroll hacia abajo
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Mostrar automáticamente el NavbarUsuario al iniciar sesión
  useEffect(() => {
    if (isAuthenticated) {
      setIsNavbarVisible(true); // Mostrar el NavbarUsuario al iniciar sesión
    }
  }, [isAuthenticated]);

  const toggleNavbar = () => {
    if (isAuthenticated) {
      setIsNavbarVisible((prev) => !prev); // Alternar visibilidad del NavbarUsuario
    } else {
      setIsModalVisible(true); // Mostrar el modal si no está autenticado
    }
  };

  const handleLogout = () => {
    logout(); // Cerrar sesión
    setIsNavbarVisible(false); // Ocultar el NavbarUsuario
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
      {isAuthenticated && (
        <NavbarUsuario
          isVisible={isNavbarVisible}
          user={user}
          onLogout={handleLogout}
        />
      )}

      {/* Modal de autenticación */}
      {isModalVisible && (
        <ModalAutentificacion
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onAuthSuccess={(userData) => {
            login(userData.token, userData); // Realizar login
            setIsModalVisible(false); // Cerrar modal
            setIsNavbarVisible(true); // Mostrar NavbarUsuario inmediatamente
          }}
        />
      )}
    </div>
  );
};

export default BotonFlotanteUsuario;
