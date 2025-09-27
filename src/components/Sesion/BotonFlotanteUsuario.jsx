import React, { useContext, useState, useEffect, useRef } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import ModalAutentificacion from "./ModalAutentificacion";
import TarjetaUsuario from "./TarjetaUsuario"; // Importación corregida
import ModalDespedida from "./ModalDespedida";
import ModalConfirmacionEliminacion from "./ModalConfirmacionEliminacion";
import { AuthContext } from "./AuthContext";

const BotonFlotanteUsuario = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const [isCardVisible, setIsCardVisible] = useState(false); // Estado renombrado para claridad
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showFarewellModal, setShowFarewellModal] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const buttonRef = useRef(null);
  const cardRef = useRef(null); // Ref renombrado para claridad

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsCardVisible(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isCardVisible &&
        buttonRef.current && !buttonRef.current.contains(event.target) &&
        cardRef.current && !cardRef.current.contains(event.target)
      ) {
        setIsCardVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCardVisible]);

  const toggleCard = () => { // Función renombrada
    if (isAuthenticated) {
      setIsCardVisible((prev) => !prev);
    } else {
      setIsModalVisible(true);
    }
  };

  const handleLogout = () => {
    logout();
    setIsCardVisible(false);
  };

  const handleDeleteUser = async () => {
    setShowConfirmModal(false);
    alert("La eliminación de cuentas está desactivada en el modo de desarrollo.");
  };

  return (
    <div>
      <button
        ref={buttonRef}
        className="fixed bottom-32 right-4 bg-gradiente-marca text-white w-14 h-14 rounded-full shadow-lg hover:bg-violeta-marca/90 transition-all duration-300 flex items-center justify-center z-50 cursor-pointer active:scale-95"
        onClick={toggleCard} // Usando la función renombrada
      >
        {isAuthenticated ? <FaSignOutAlt className="w-5 h-5" /> : <FaUserCircle className="w-8 h-8" />}
      </button>

      <div ref={cardRef}> {/* Ref renombrado */}
        {isAuthenticated && (
          <TarjetaUsuario
            isVisible={isCardVisible}
            user={user}
            onLogout={handleLogout}
            onDeleteUser={() => setShowConfirmModal(true)}
          />
        )}
      </div>

      {isModalVisible && (
        <ModalAutentificacion
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      )}

      <ModalConfirmacionEliminacion
        isVisible={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleDeleteUser}
      />

      <ModalDespedida
        isVisible={showFarewellModal}
        onClose={() => {
          setShowFarewellModal(false);
          handleLogout();
        }}
      />
    </div>
  );
};

export default BotonFlotanteUsuario;
