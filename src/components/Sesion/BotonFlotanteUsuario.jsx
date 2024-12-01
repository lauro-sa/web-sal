import React, { useContext, useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import ModalAutentificacion from "./ModalAutentificacion";
import NavbarUsuario from "./NavbarUsuario";
import ModalDespedida from "./ModalDespedida";
import ModalConfirmacionEliminacion from "./ModalConfirmacionEliminacion";
import { AuthContext } from "./AuthContext";

const BotonFlotanteUsuario = () => {
  const { isAuthenticated, user, login, logout } = useContext(AuthContext);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showFarewellModal, setShowFarewellModal] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Logs para depuración
  useEffect(() => {
    console.log("Estado del usuario en el contexto:", user);
  }, [user]);

  // Ocultar Navbar al hacer scroll hacia abajo
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

  // Mostrar automáticamente el Navbar al iniciar sesión
  useEffect(() => {
    if (isAuthenticated) {
      setIsNavbarVisible(true);
    }
  }, [isAuthenticated]);

  // Alternar visibilidad del Navbar
  const toggleNavbar = () => {
    if (isAuthenticated) {
      setIsNavbarVisible((prev) => !prev);
    } else {
      setIsModalVisible(true);
    }
  };

  // Manejar cierre de sesión
  const handleLogout = () => {
    logout();
    setIsNavbarVisible(false);
  };

  // Manejar eliminación de usuario
  const handleDeleteUser = async () => {
    if (!user || !user.id) {
      alert(
        "No se pudo obtener el ID del usuario. Intenta iniciar sesión nuevamente."
      );
      console.error("ID del usuario no encontrado:", user);
      return;
    }

    console.log("ID del usuario:", user.id);
    const token = localStorage.getItem("token");
    console.log("Token JWT:", token);

    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${user.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error desde el servidor:", errorData);
        alert(`Error al eliminar la cuenta: ${errorData.message}`);
        return;
      }

      setShowFarewellModal(true); // Mostrar modal de despedida
    } catch (error) {
      console.error("Error al eliminar la cuenta:", error);
      alert("Error al eliminar la cuenta. Por favor, intenta de nuevo.");
    }
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
          onDeleteUser={() => setShowConfirmModal(true)} // Mostrar modal de confirmación
        />
      )}

      {/* Modal de autenticación */}
      {isModalVisible && (
        <ModalAutentificacion
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onAuthSuccess={(userData) => {
            login(userData.token, userData);
            setIsModalVisible(false);
            setIsNavbarVisible(true);
          }}
        />
      )}

      {/* ModalConfirmacionEliminacion */}
      <ModalConfirmacionEliminacion
        isVisible={showConfirmModal}
        onClose={() => setShowConfirmModal(false)} // Cierra el modal sin eliminar
        onConfirm={() => {
          setShowConfirmModal(false); // Cierra el modal de confirmación
          handleDeleteUser(); // Llama a la función para eliminar el usuario
        }}
      />

      {/* ModalDespedida */}
      <ModalDespedida
        isVisible={showFarewellModal}
        onClose={() => {
          setShowFarewellModal(false);
          handleLogout(); // Cierra sesión al cerrar el modal
        }}
      />
    </div>
  );
};

export default BotonFlotanteUsuario;
