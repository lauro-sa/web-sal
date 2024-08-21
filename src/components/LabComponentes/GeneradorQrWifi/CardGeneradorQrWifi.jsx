import React, { useState } from "react";
import ModalCustom from "../../ModalCustom";
import GeneradorQrWifi from "./GeneradorQrWifi";

const CardGeneradorQrWifi = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-md shadow-md p-2 transition-all duration-300 ease-in-out border border-solid border-azul-custom hover:border-violeta-marca hover:bg-violeta-marca/5 mx-4 my-2 w-full max-w-sm md:max-w-lg group">
      <div className="px-6 py-4">
        <div className="text-lg uppercase tracking-wider mb-4 text-violeta-marca">
          Generador de Códigos QR Wi-Fi
        </div>
        <p className="text-gray-700 text-base group-hover:text-texto-claro transition-colors duration-200">
          Crea un código QR para conectarte a una red Wi-Fi de manera rápida.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="px-4 py-3 text-center text-[10px] md:text-sm uppercase tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
          onClick={() => setModalOpen(true)}
        >
          Abrir Generador
        </button>
      </div>
      <ModalCustom isVisible={modalOpen} onClose={() => setModalOpen(false)}>
        <GeneradorQrWifi />
      </ModalCustom>
    </div>
  );
};

export default CardGeneradorQrWifi;
