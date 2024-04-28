import React, { useState } from "react";
import QRCode from "qrcode.react";
import { IoCloseCircleOutline } from "react-icons/io5";
import "../../../estilos.css";

const GeneradorQr = () => {
  const [enlace, setEnlace] = useState("");
  const [qrUrl, setQrUrl] = useState("https://www.example.com"); // URL de ejemplo
  const [qrColor, setQrColor] = useState("#000000"); // Color inicial del QR
  const [bgColor, setBgColor] = useState("#FFFFFF"); // Color inicial del fondo
  const [esValido, setEsValido] = useState(false); // Para controlar si el enlace es válido
  const [estiloActivo, setEstiloActivo] = useState("nb"); // Controla cuál estilo está activo

  const generarQR = () => {
    if (enlace) {
      setQrUrl(enlace);
      setEsValido(true);
    } else {
      setQrUrl("https://www.example.com"); // URL de ejemplo al no ingresar enlace
      setEsValido(false);
    }
  };

  const descargarQR = () => {
    if (esValido) {
      const canvas = document.querySelector("canvas");
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "qr.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const limpiarInput = () => {
    setEnlace(""); // Limpia el input
  };

  const cambiarEstilo = (event) => {
    const estilo = event.target.value;
    setEstiloActivo(estilo);
    switch (estilo) {
      case "nb":
        setQrColor("#000000");
        setBgColor("#FFFFFF");
        break;
      case "bn":
        setQrColor("#FFFFFF");
        setBgColor("#000000");
        break;
      case "nt":
        setQrColor("#000000");
        setBgColor("transparent");
        break;
      case "wt":
        setQrColor("#FFFFFF");
        setBgColor("transparent");
        break;
      default:
        setQrColor("#000000");
        setBgColor("#FFFFFF");
        break;
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="tracking-in-contract-bck-top text-xl mb-8">
        Generador de QR
      </h1>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Ingresa el enlace aquí"
          value={enlace}
          onChange={(e) => setEnlace(e.target.value)}
          className="w-full h-12 text-md text-white/80 placeholder-gray-400 bg-transparent border-2 border-white rounded-lg pl-3 pr-10 text-center focus:outline-none focus:ring-2 focus:ring-violeta-marca"
        />
        {enlace && (
          <button
            onClick={limpiarInput}
            className="absolute inset-y-0 right-3 flex items-center justify-center text-white text-lg"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <IoCloseCircleOutline />
          </button>
        )}
      </div>
      <button
        onClick={generarQR}
        className={`btn ${
          enlace.trim() !== ""
            ? "px-4 py-3 text-center text-[10px] md:text-sm uppercase tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
            : "px-4 py-3 text-center text-[10px] md:text-sm uppercase tracking-wider font-bold text-gray-500 cursor-not-allowed"
        }`}
        disabled={enlace.trim() === ""}
      >
        Generar QR
      </button>
      <select
        value={estiloActivo}
        onChange={cambiarEstilo}
        className="bg-black text-white  border-2 border-white/80 rounded-lg appearance-none w-52 h-12 px-4 py-2 cursor-pointer text-center"
        style={{ background: "black" }}
      >
        <option className="bg-black text-white" value="nb">
          Negro sobre Blanco
        </option>
        <option className="bg-black text-white" value="bn">
          Blanco sobre Negro
        </option>
        <option className="bg-black text-white" value="nt">
          Negro sin fondo
        </option>
        <option className="bg-black text-white" value="wt">
          Blanco sin fondo
        </option>
      </select>
      <div
        className={`${
          bgColor === "transparent" ? "bg-violeta-marca/30" : ""
        } p-3 shadow-violeta-marca rounded-lg`}
      >
        <QRCode
          value={qrUrl}
          size={256}
          level="H"
          includeMargin={true}
          fgColor={qrColor}
          bgColor={bgColor === "transparent" ? "rgba(0, 0, 0, 0)" : bgColor}
        />
      </div>
      <button
        onClick={descargarQR}
        className={`btn ${
          esValido
            ? "px-4 py-3 text-center text-[10px] md:text-sm uppercase tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
            : "px-4 py-3 text-center text-[10px] md:text-sm uppercase tracking-wider font-bold   text-gray-500 cursor-not-allowed"
        }`}
        disabled={!esValido}
      >
        Descargar QR
      </button>
    </div>
  );
};

export default GeneradorQr;
