import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import FondoParticulasX from "./components/FondoParticulasX";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Laboratorio from "./pages/Laboratorio";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <div className="App relative">
        <FondoParticulasX />
        <div className="relative z-10">
          {" "}
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/laboratorio" element={<Laboratorio />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
