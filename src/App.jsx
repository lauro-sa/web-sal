import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import FondoParticulasX from "./components/FondoParticulasX";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Laboratorio from "./pages/Laboratorio";
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios";
import DesarrolloPaginasWeb from "./pages/DesarrolloPaginasWeb"; // Importar la nueva página
import Error404 from "./pages/Error404";
import Footer from "./components/Footer";

function ContenidoApp() {
  const ubicacion = useLocation();

  const rutasValidas = ["/", "/sobre-mi", "/proyectos", "/laboratorio", "/contacto", "/servicios", "/desarrollo-paginas-web"];
  const esPaginaError = !rutasValidas.includes(ubicacion.pathname);

  return (
    <div className="App flex flex-col min-h-screen relative">
      {/* Siempre muestra el fondo animado */}
      <FondoParticulasX />
      <div className="flex flex-col flex-grow relative z-10">
        {!esPaginaError && <Navbar />}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/laboratorio" element={<Laboratorio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/desarrollo-paginas-web" element={<DesarrolloPaginasWeb />} /> {/* Ruta para la nueva página */}
          <Route path="*" element={<Error404 />} />
        </Routes>
        {!esPaginaError && <Footer />}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ContenidoApp />
    </Router>
  );
}

export default App;
