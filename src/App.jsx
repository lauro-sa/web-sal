import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FondoParticulasX from "./components/FondoParticulasX";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Laboratorio from "./pages/Laboratorio";
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen relative">
        <FondoParticulasX />
        <div className="flex flex-col flex-grow relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/laboratorio" element={<Laboratorio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/servicios" element={<Servicios />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
