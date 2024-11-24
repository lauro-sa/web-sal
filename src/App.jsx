import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./components/Sesion/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BotonFlotanteUsuario from "./components/Sesion/BotonFlotanteUsuario";
import NavbarUsuario from "./components/Sesion/NavbarUsuario";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Laboratorio from "./pages/Laboratorio";
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios";
import DesarrolloPaginasWeb from "./pages/DesarrolloPaginasWeb";
import Noticias from "./pages/Noticias";
import Error404 from "./pages/Error404";

function App() {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <Router>
      <div className="App flex flex-col min-h-screen relative">
        {/* Navbar principal */}
        <Navbar />

        {/* Botón Flotante de Usuario */}
        <BotonFlotanteUsuario />

        {/* Navbar flotante del usuario autenticado */}
        {isAuthenticated && (
          <NavbarUsuario
            user={user}
            onLogout={logout}
            isVisible={isAuthenticated}
          />
        )}


        {/* Rutas principales */}
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

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
