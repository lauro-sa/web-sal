import React, { useState, useEffect } from "react";

// Componentes
import FondoParticulasX from "../components/FondoParticulasX";
import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import ModalAutenticacion from "../components/Sesion/ModalAutentificacion";

// Componentes herramientas
import CardGeneradorContrasenas from "../components/LabComponentes/GeneradorDeContraseñas/CardGeneradorContrasenas";
import CardGeneradorQr from "../components/LabComponentes/GeneradorDeQr/CardGeneradorQr";
import CardConversorAudio from "../components/LabComponentes/ConversorAudio/CardConversorAudio";
import CardConversorImg from "../components/LabComponentes/ConversorImg/CardConversorImg";
import CardGeneradorQrWifi from "../components/LabComponentes/GeneradorQrWifi/CardGeneradorQrWifi";

function Laboratorio() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const handleAuthSuccess = (token) => {
    localStorage.setItem("token", token); // Guardar el token en almacenamiento local
    setIsAuthenticated(true); // Actualizar el estado de autenticación
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Verificar si el token existe en el almacenamiento local
  }, []);

  if (!isAuthenticated) {
    return (
      <ModalAutenticacion
        onAuthSuccess={(token) => handleAuthSuccess(token)}
      />
    );
  }

  return (
    <div className="relative min-h-screen">
      <FondoParticulasX /> {/* Incluye el fondo animado */}
      <ContenedorPagina className="px-4 relative z-10">
        <h1 className="mt-16 text-xl font-bold">Laboratorio</h1>
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
