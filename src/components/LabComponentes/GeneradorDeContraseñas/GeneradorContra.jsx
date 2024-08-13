import React, { useState } from "react";
import "../../../estilos.css";

const GeneradorContra = () => {
  const [vistaActual, setVistaActual] = useState("inicio");
  const [longitud, setLongitud] = useState(8);
  const [incluyeMayusculas, setIncluyeMayusculas] = useState(false);
  const [incluyeMinúsculas, setIncluyeMinúsculas] = useState(true);
  const [incluyeNumeros, setIncluyeNumeros] = useState(false);
  const [incluyeSimbolos, setIncluyeSimbolos] = useState(false);
  const [contrasenaGenerada, setContrasenaGenerada] = useState("");
  const [historial, setHistorial] = useState([]);

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(contrasenaGenerada);
    alert("Contraseña copiada al portapapeles");
  };

  // Aumentando la lista de caracteres chinos
  const caracteresChinos =
    "的一是不了人我有在他这中大来上国个到说们为子和你地出道也时年得就那要下以生会自着去之过家学对可她里后小么心多天而能好都然没成事只作当如用样方知行身所些看定天示那主样年生";

  const generarContrasena = () => {
    let caracteres = "";
    if (vistaActual === "segura") {
      // Agregar tipos de caracteres según las opciones seleccionadas
      caracteres += "abcdefghijklmnopqrstuvwxyz"; // Minúsculas siempre incluidas
      if (incluyeMayusculas) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (incluyeNumeros) caracteres += "0123456789";
      if (incluyeSimbolos) caracteres += '!@#$%&*()_+-=[]{}|;:".<>/?~';
    } else {
      // Para Pro y Ultra se utilizan todos los caracteres
      caracteres =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_+-=[]{}|;:".<>/?~';
    }

    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
      if (vistaActual === "segura" && (i + 1) % 6 === 0 && i + 1 !== longitud) {
        contrasena +=
          caracteres.charAt(Math.floor(Math.random() * caracteres.length)) +
          "-";
      } else if (vistaActual === "ultraX2" && (i + 1) % 4 === 0) {
        contrasena += caracteresChinos.charAt(
          Math.floor(Math.random() * caracteresChinos.length)
        );
      } else {
        contrasena += caracteres.charAt(
          Math.floor(Math.random() * caracteres.length)
        );
      }
    }

    setContrasenaGenerada(contrasena);
    setHistorial((prev) => [...prev, contrasena]); // Añadir al historial
  };

  return (
    <div className="p-4 max-w-md mx-auto ">
      <h1 className="tracking-in-contract-bck-top text-xl mb-8">
        Generador de Contraseñas
      </h1>
      {vistaActual === "inicio" && (
        <div className=" flex flex-col space-y-5 items-center">
          <button
            className="px-4 py-2 text-center text-sm  tracking-wider font-bold rounded-xl border text-black/80  bg-violeta-marca border-texto-claro hover:border-violeta-marca hover:bg-texto-claro transition-colors w-52 "
            onClick={() => setVistaActual("segura")}
          >
            <span className="font-medium">Contraseña</span> Segura
          </button>
          <button
            className="px-4 py-2 text-center text-sm  tracking-wider font-bold rounded-xl border text-black/80  bg-violeta-marca border-texto-claro hover:border-violeta-marca hover:bg-texto-claro transition-colors w-52"
            onClick={() => setVistaActual("pro")}
          >
            <span className="font-medium">Contraseña</span> Pro
          </button>
          <button
            className="px-4 py-2 text-center text-sm  tracking-wider font-bold rounded-xl border text-black/80  bg-violeta-marca border-texto-claro hover:border-violeta-marca hover:bg-texto-claro transition-colors w-52"
            onClick={() => setVistaActual("ultra")}
          >
            <span className="font-medium">Contraseña</span> Ultra
          </button>
        </div>
      )}

      {vistaActual !== "inicio" && (
        <div>
          <h1 className="text-2xl">
            {vistaActual === "segura"
              ? "Contraseña Segura"
              : vistaActual === "pro"
              ? "Contraseña Pro"
              : "Contraseña Ultra"}
          </h1>
          <p>
            Descripción:{" "}
            {vistaActual === "segura"
              ? "Personaliza tu contraseña incluyendo mayúsculas, minúsculas, números y símbolos. Se añadirá un guión cada 6 caracteres."
              : vistaActual === "pro"
              ? "Contraseña Pro con todas las opciones y 28 caracteres."
              : "Contraseña Ultra con caracteres chinos cada cuatro caracteres."}
          </p>
          {vistaActual === "segura" && (
            <>
              <label>
                Longitud de la contraseña:
                <select
                  value={longitud}
                  onChange={(e) => setLongitud(parseInt(e.target.value))}
                >
                  <option value="12">12</option>
                  <option value="18">18</option>
                  <option value="24">24</option>
                </select>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={incluyeMayusculas}
                  onChange={(e) => setIncluyeMayusculas(e.target.checked)}
                />{" "}
                Mayúsculas
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={incluyeNumeros}
                  onChange={(e) => setIncluyeNumeros(e.target.checked)}
                />{" "}
                Números
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={incluyeSimbolos}
                  onChange={(e) => setIncluyeSimbolos(e.target.checked)}
                />{" "}
                Símbolos
              </label>
            </>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={generarContrasena}
          >
            Generar{" "}
            {vistaActual === "segura"
              ? "Contraseña Segura"
              : vistaActual === "pro"
              ? "Contraseña Pro"
              : "Contraseña Ultra"}
          </button>
          {contrasenaGenerada && (
            <>
              <div className="relative mt-4">
                <input
                  type="text"
                  className="w-full pr-10 pl-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                  value={contrasenaGenerada}
                  readOnly
                />
                <button
                  onClick={copiarAlPortapapeles}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <svg
                    className="w-4 h-4 fill-current text-gray-500 hover:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 16h-1v-6h1m1-8H7a2 2 0 00-2 2v14h4v2H3v-2H2V4h12m3 4h-1V7a2 2 0 00-2-2h-4v2h4v11l-2-2H9v2h3.5l4 4V8z" />
                  </svg>
                </button>
              </div>
            </>
          )}
          <button
            className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setVistaActual("inicio")}
          >
            Volver
          </button>
        </div>
      )}
    </div>
  );
};

export default GeneradorContra;
