import React, { useEffect, useState } from "react";
import ModalAutenticacion from "../components/Sesion/ModalAutentificacion";
import FondoParticulasX from "../components/FondoParticulasX";
import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import CompNoticias from "../components/Noticias/CompNoticias";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    if (isAuthenticated) {
      fetchNoticias();
    }
  }, [isAuthenticated]);

  const fetchNoticias = async () => {
    setCargando(true);
    try {
      const response = await fetch("http://localhost:5000/api/noticias", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error al obtener noticias.");
      }

      const data = await response.json();

      if (data.success && Array.isArray(data.articles)) {
        setNoticias(data.articles);
      } else {
        setError("No se encontraron noticias.");
      }
    } catch (error) {
      console.error("Error al obtener noticias:", error);
      setError(error.message || "Hubo un problema al cargar las noticias.");
    } finally {
      setCargando(false);
    }
  };

  const handleAuthSuccess = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <ModalAutenticacion onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="relative min-h-screen">
      <FondoParticulasX />
      <ContenedorPagina className="px-4 relative z-10 mt-20">
        <h1 className="m-4 text-xl font-bold text-white">Noticias</h1>
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
                imageUrl={noticia.urlToImage || "/placeholder.jpg"}
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
