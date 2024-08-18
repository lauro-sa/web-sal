import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import FondoParticulasX from "./components/FondoParticulasX";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Laboratorio from "./pages/Laboratorio";
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ContenidoApp() {
  const ubicacion = useLocation();

  // Lista de rutas válidas en la aplicación
  const rutasValidas = ["/", "/sobre-mi", "/proyectos", "/laboratorio", "/contacto", "/servicios"];
  const esPaginaError = !rutasValidas.includes(ubicacion.pathname);

  return (
    <div className="App flex flex-col relative">
      {/* Siempre muestra el fondo animado */}
      <FondoParticulasX />
      <div className="flex flex-col flex-grow relative z-10">
        {/* Barra de navegación moverse entre secciones */}
        {!esPaginaError && <Navbar />}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/laboratorio" element={<Laboratorio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
          {/* Ruta comodín para manejar errores 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
        {/* Pie de página con información de contacto */}
        {!esPaginaError && <Footer />}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ContenidoApp />
    </Router>
  );
}

export default App;
