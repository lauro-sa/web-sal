import React, { useEffect } from "react";
import ModalCustom from "../ModalCustom";

const ModalDespedida = ({ isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const createFallingEmoji = () => {
        // Seleccionamos aleatoriamente entre carita triste o corazón roto
        const emoji = Math.random() > 0.5 ? "🙁" : "💔";

        const element = document.createElement("div");
        element.textContent = emoji;
        element.style.position = "fixed";
        element.style.top = "-50px";
        element.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
        element.style.fontSize = `${Math.random() * 1.5 + 1.5}rem`; // Tamaño aleatorio entre 1.5rem y 3rem
        element.style.animation = `fall ${Math.random() * 2 + 4}s linear`; // Caída lenta (4-6s)
        element.style.zIndex = 1000;
        document.body.appendChild(element);

        // Elimina el emoji del DOM después de la animación
        setTimeout(() => {
          element.remove();
        }, 6000); // 6s para coincidir con la duración de la animación más larga
      };

      // Crear emojis continuamente mientras el modal está visible
      const interval = setInterval(() => {
        createFallingEmoji();
      }, 400); // Un emoji cada 400ms

      // Limpia los emojis cuando el modal se cierra
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <ModalCustom isVisible={isVisible} onClose={onClose}>
      <div className="w-full max-w-sm mx-auto space-y-4 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4 text-center">¡Cuenta Eliminada!</h2>
        <p className="text-center mt-4">Esperamos que vuelvas pronto. ❤️</p>
        <button
          onClick={onClose}
          className="px-4 py-2 mt-6 text-center text-sm font-bold rounded-xl border border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
        >
          Cerrar
        </button>
      </div>
    </ModalCustom>
  );
};

export default ModalDespedida;
