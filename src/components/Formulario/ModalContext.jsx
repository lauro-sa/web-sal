// ModalContext.js
import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const mostrarModal = () => setModalVisible(true);
  const ocultarModal = () => setModalVisible(false);

  return (
    <ModalContext.Provider value={{ isModalVisible, mostrarModal, ocultarModal }}>
      {children}
    </ModalContext.Provider>
  );
};
