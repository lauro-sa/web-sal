// ModalFormulario.js
import React from "react";
import { useModal } from "../components/ModalContext"; // Ajusta la ruta si es necesario

const ModalFormulario = () => {
  const { isModalVisible, ocultarModal } = useModal();

  if (!isModalVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg">
        <h1>Modal está Abierto</h1>
        <button onClick={ocultarModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalFormulario;
