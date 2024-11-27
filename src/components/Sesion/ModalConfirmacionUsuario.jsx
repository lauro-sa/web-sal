import React, { useEffect } from "react";
import ModalCustom from "../ModalCustom";
import confetti from "canvas-confetti";

const ModalConfirmacionUsuario = ({ isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
          const modalElement = document.querySelector("#modal-confirmacion");
          const rect = modalElement.getBoundingClientRect();
      
          const originX = (rect.left + rect.width / 2) / window.innerWidth;
          const originY = (rect.top + rect.height / 2) / window.innerHeight;
      
          const defaults = {
            spread: 720, // Aumentamos el spread para mayor dispersión
            ticks: 250, // Duración más larga de la animación
            gravity: 0.2, // Más lento al caer
            decay: 0.98, // Deceleración más lenta
            startVelocity: 10, // Velocidad inicial más baja
            scalar: 1, // Tamaño de las partículas
            origin: { x: originX, y: originY }, // Origen en el centro del modal
          };
      
          function shootConfetti() {
            // Disparar varios efectos para llenar más el espacio
            confetti({ ...defaults, particleCount: 100 });
            confetti({ ...defaults, particleCount: 50, scalar: 1.5 });
            confetti({ ...defaults, particleCount: 30, shapes: ["circle"] });
          }
      
          shootConfetti();
        }
      }, [isVisible]);

  return (
    <ModalCustom isVisible={isVisible} onClose={onClose}>
      <div id="modal-confirmacion" className="text-center">
        <h2 className="text-xl font-bold">¡Usuario Creado!</h2>
        <p className="mt-4">Tu cuenta ha sido creada exitosamente. Ahora puedes iniciar sesión.</p>
        <button
          onClick={onClose}
          className="px-4 py-2 mt-6 text-center text-sm uppercase tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
        >
          Cerrar
        </button>
      </div>
    </ModalCustom>
  );
};

export default ModalConfirmacionUsuario;
