import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Contexto
import { AuthProvider } from "./components/Sesion/AuthContext";

// Componentes generales
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Laboratorio from "./pages/Laboratorio";
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios";
import DesarrolloPaginasWeb from "./pages/DesarrolloPaginasWeb";
import Noticias from "./pages/Noticias";
import Error404 from "./pages/Error404";

function ContenidoApp() {
  const ubicacion = useLocation();

  const rutasValidas = [
    "/",
    "/sobre-mi",
    "/proyectos",
    "/laboratorio",
    "/contacto",
    "/servicios",
    "/desarrollo-paginas-web",
    "/noticias",
  ];
  const esPaginaError = !rutasValidas.includes(ubicacion.pathname);

  return (
    <div className="App flex flex-col min-h-screen relative">
      <div className="flex flex-col flex-grow relative z-10">
        {!esPaginaError && <Navbar />}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/laboratorio" element={<Laboratorio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/desarrollo-paginas-web" element={<DesarrolloPaginasWeb />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        {!esPaginaError && <Footer />}
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ContenidoApp />
      </Router>
    </AuthProvider>
  );
}

export default App;
