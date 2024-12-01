// PFI | FULL STACK AVANZADO - Consigna de trabajo final integrador.
// Este archivo define el componente 'Laboratorio', una página en la aplicación React que ofrece
// acceso a diversas herramientas digitales y componentes experimentales desarrollados.

import React, { useState, useEffect } from "react";

// Importación de componentes visuales y de fondo
import FondoParticulasX from "../components/FondoParticulasX";
import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import ModalAutenticacion from "../components/Sesion/ModalAutentificacion";

// Importación de tarjetas de herramientas del laboratorio
import CardGeneradorContrasenas from "../components/LabComponentes/GeneradorDeContraseñas/CardGeneradorContrasenas";
import CardGeneradorQr from "../components/LabComponentes/GeneradorDeQr/CardGeneradorQr";
import CardConversorAudio from "../components/LabComponentes/ConversorAudio/CardConversorAudio";
import CardConversorImg from "../components/LabComponentes/ConversorImg/CardConversorImg";
import CardGeneradorQrWifi from "../components/LabComponentes/GeneradorQrWifi/CardGeneradorQrWifi";

function Laboratorio() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token") // Chequea la autenticación inicial a través de token almacenado localmente
  );

  const handleAuthSuccess = (token) => {
    localStorage.setItem("token", token); // Almacena el nuevo token
    setIsAuthenticated(true); // Actualiza el estado a autenticado
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Actualiza el estado basado en la presencia del token
  }, []);

  // Si no está autenticado, muestra el modal de autenticación
  if (!isAuthenticated) {
    return (
      <ModalAutenticacion
        onAuthSuccess={(token) => handleAuthSuccess(token)}
      />
    );
  }

  // Renderizado del contenido del laboratorio solo si el usuario está autenticado
  return (
    <div className="relative min-h-screen">
      <FondoParticulasX /> {/* Fondo animado para embellecer la página */}
      <ContenedorPagina className="px-4 relative z-10 mt-20">
        <h1 className="m-4 text-xl font-bold">Laboratorio</h1>
        <p className="mt-2 mb-8 text-l leading-relaxed">
          Bienvenido a mi Laboratorio Digital, un espacio donde experimento y
          desarrollo pequeños proyectos de investigación y pruebas. Aquí podrás
          encontrar herramientas y aplicaciones que he creado para explorar nuevas
          tecnologías, resolver problemas cotidianos y mejorar mis habilidades.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center mb-16 md:mb-0">
          <CardGeneradorContrasenas />
          <CardGeneradorQr />
          <CardConversorAudio />
          <CardConversorImg />
          <CardGeneradorQrWifi />
        </div>
      </ContenedorPagina>
    </div>
  );
}

export default Laboratorio;
