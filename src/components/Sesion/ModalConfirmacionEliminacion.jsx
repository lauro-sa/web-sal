import React from "react";
import ModalCustom from "../ModalCustom";

const ModalConfirmacionEliminacion = ({ isVisible, onClose, onConfirm }) => {
  return (
    <ModalCustom isVisible={isVisible} onClose={onClose}>
      <div className="w-full max-w-sm mx-auto space-y-4">
        <h2 className="text-xl font-bold mb-4 text-center">Confirmar Eliminación</h2>
        <p className="text-center mt-4">¿Estás seguro de que deseas eliminar tu cuenta? Esta acción es irreversible.</p>
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-center text-sm font-bold rounded-xl border border-gray-500 hover:bg-gray-200 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-center text-sm font-bold rounded-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
          >
            Confirmar
          </button>
        </div>
      </div>
    </ModalCustom>
  );
};

export default ModalConfirmacionEliminacion;
