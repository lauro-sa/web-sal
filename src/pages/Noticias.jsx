// PFI | FULL STACK AVANZADO - Consigna de trabajo final integrador.
// Este archivo define un componente React para la página de noticias, gestionando la autenticación,
// la carga de noticias desde una API y su visualización adecuada.

import React, { useEffect, useState } from "react";
import ModalAutenticacion from "../components/Sesion/ModalAutentificacion";
import FondoParticulasX from "../components/FondoParticulasX";
import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import CompNoticias from "../components/Noticias/CompNoticias";

function Noticias() {
  const [noticias, setNoticias] = useState([]); // Almacena las noticias obtenidas de la API
  const [cargando, setCargando] = useState(true); // Estado de carga de las noticias
  const [error, setError] = useState(null); // Maneja posibles errores en la carga de noticias
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token") // Verifica si el usuario está autenticado mediante un token
  );

  useEffect(() => {
    if (isAuthenticated) {
      fetchNoticias(); // Carga las noticias si el usuario está autenticado
    }
  }, [isAuthenticated]);

  const fetchNoticias = async () => {
    setCargando(true);
    try {
      const response = await fetch("/api/noticias", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (!response.ok) {
        throw new Error("Error al obtener noticias.");
      }

      const data = await response.json();

      if (data.success && Array.isArray(data.articles)) {
        setNoticias(data.articles); // Actualiza el estado con las noticias obtenidas
      } else {
        setError("No se encontraron noticias.");
      }
    } catch (error) {
      console.error("Error al obtener noticias:", error);
      setError("Hubo un problema al cargar las noticias.");
    } finally {
      setCargando(false);
    }
  };

  const handleAuthSuccess = (token) => {
    localStorage.setItem("token", token); // Almacena el token en localStorage
    setIsAuthenticated(true); // Actualiza el estado de autenticación
  };

  if (!isAuthenticated) {
    // Si no está autenticado, muestra el modal de autenticación
    return (
      <ModalAutenticacion
        onAuthSuccess={(token) => handleAuthSuccess(token)}
      />
    );
  }

  return (
    <div className="relative min-h-screen">
      <FondoParticulasX /> // Componente de fondo con partículas
      <ContenedorPagina className="px-4 relative z-10">
        <h1 className="mt-16 text-xl font-bold text-white">Noticias</h1>
        {cargando ? (
          <p className="text-white">Cargando noticias...</p>
        ) : error ? (
          <p className="text-white">{error}</p>
        ) : noticias.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {noticias.map((noticia, index) => (
              <CompNoticias
                key={index}
                title={noticia.title || "Título no disponible"}
                description={noticia.description || "Descripción no disponible"}
                url={noticia.url}
                imageUrl={noticia.urlToImage || "/placeholder.jpg"} // Imagen por defecto si no hay URL
              />
            ))}
          </div>
        ) : (
          <p className="text-white">No hay noticias disponibles.</p>
        )}
      </ContenedorPagina>
    </div>
  );
}

export default Noticias;
