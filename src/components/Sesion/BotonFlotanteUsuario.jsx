import React, { useContext, useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import ModalAutentificacion from "./ModalAutentificacion";
import NavbarUsuario from "./NavbarUsuario";
import ModalDespedida from "./ModalDespedida";
import ModalConfirmacionEliminacion from "./ModalConfirmacionEliminacion";
import { AuthContext } from "./AuthContext";

const BotonFlotanteUsuario = () => {
  const { isAuthenticated, user, login, logout } = useContext(AuthContext);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false); // Controla la visibilidad del Navbar
  const [isModalVisible, setIsModalVisible] = useState(false); // Controla la visibilidad del modal de autenticación
  const [showConfirmModal, setShowConfirmModal] = useState(false); // Modal de confirmación
  const [showFarewellModal, setShowFarewellModal] = useState(false); // Modal de despedida
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

  // Función para eliminar usuario
  const handleDeleteUser = async () => {
    setShowConfirmModal(false); // Cierra el modal de confirmación
    try {
      const response = await fetch('/api/delete-user', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setShowFarewellModal(true); // Muestra el modal de despedida
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error al eliminar la cuenta:", error);
      alert("Error al eliminar la cuenta. Por favor, intenta de nuevo.");
    }
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

      {/* Componente de NavbarUsuario */}
      {isAuthenticated && (
        <NavbarUsuario
          isVisible={isNavbarVisible}
          user={user}
          onLogout={handleLogout}
          onDeleteUser={() => setShowConfirmModal(true)} // Abre el modal de confirmación
        />
      )}

      {/* Modal para autenticación */}
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

      {/* ModalConfirmacionEliminacion */}
      <ModalConfirmacionEliminacion
        isVisible={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleDeleteUser}
      />

      {/* ModalDespedida */}
      <ModalDespedida
        isVisible={showFarewellModal}
        onClose={() => {
          setShowFarewellModal(false);
          handleLogout(); // Cierra sesión al cerrar el modal de despedida
        }}
      />
    </div>
  );
};

export default BotonFlotanteUsuario;
