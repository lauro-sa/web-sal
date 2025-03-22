import React, { useState, useRef, useEffect } from "react";
import QRCode from "qrcode.react";
import { IoCloseCircleOutline, IoPencil } from "react-icons/io5";
import "../../../estilos.css";

const GeneradorQr = () => {
  const [enlace, setEnlace] = useState("");
  const [urlQr, setUrlQr] = useState("https://www.example.com");
  const [colorQr, setColorQr] = useState("#000000");
  const [colorFondo, setColorFondo] = useState("#FFFFFF");
  const [conMarco, setConMarco] = useState(false);
  const [colorMarco, setColorMarco] = useState("#000000");
  const [grosorMarco, setGrosorMarco] = useState(5);
  const [bordesRedondeados, setBordesRedondeados] = useState(false);
  const [esValido, setEsValido] = useState(false);
  const qrRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (enlace.trim()) {
        setUrlQr(enlace);
        setEsValido(true);
      } else {
        setUrlQr("https://www.example.com");
        setEsValido(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [enlace]);

  const descargarCodigoQr = (conFondo = false) => {
    if (esValido && qrRef.current) {
      const canvas = qrRef.current.querySelector("canvas");
      const tamañoTotal = canvas.width + (conMarco ? grosorMarco * 2 : 0);

      const nuevoCanvas = document.createElement("canvas");
      nuevoCanvas.width = tamañoTotal;
      nuevoCanvas.height = tamañoTotal;
      const nuevoCtx = nuevoCanvas.getContext("2d");

      if (bordesRedondeados) {
        nuevoCtx.beginPath();
        const radio = Math.min(tamañoTotal / 10, 20);
        nuevoCtx.roundRect(0, 0, tamañoTotal, tamañoTotal, radio);
        nuevoCtx.clip();
      }

      if (conFondo) {
        nuevoCtx.fillStyle = colorFondo;
        nuevoCtx.fillRect(0, 0, tamañoTotal, tamañoTotal);
      }

      nuevoCtx.drawImage(canvas, conMarco ? grosorMarco : 0, conMarco ? grosorMarco : 0);

      if (conMarco) {
        nuevoCtx.strokeStyle = colorMarco;
        nuevoCtx.lineWidth = grosorMarco;

        if (bordesRedondeados) {
          const radio = Math.min(tamañoTotal / 10, 20);
          nuevoCtx.beginPath();
          nuevoCtx.roundRect(
            grosorMarco / 2,
            grosorMarco / 2,
            tamañoTotal - grosorMarco,
            tamañoTotal - grosorMarco,
            radio
          );
          nuevoCtx.stroke();
        } else {
          nuevoCtx.strokeRect(
            grosorMarco / 2,
            grosorMarco / 2,
            tamañoTotal - grosorMarco,
            tamañoTotal - grosorMarco
          );
        }
      }

      const pngUrl = nuevoCanvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const enlaceDescarga = document.createElement("a");
      enlaceDescarga.href = pngUrl;
      enlaceDescarga.download = `codigo_qr${conFondo ? "_con_fondo" : "_sin_fondo"}.png`;
      document.body.appendChild(enlaceDescarga);
      enlaceDescarga.click();
      document.body.removeChild(enlaceDescarga);
    }
  };

  const limpiarEntrada = () => {
    setEnlace("");
  };

  const aumentarGrosor = () => {
    setGrosorMarco((prev) => Math.min(20, prev + 1));
  };

  const disminuirGrosor = () => {
    setGrosorMarco((prev) => Math.max(1, prev - 1));
  };

  const establecerColores = (tipo, categoria) => {
    switch (tipo) {
      case "negro":
        if (categoria === "qr") {
          setColorQr("#000000");
          if (!conMarco || colorMarco === colorFondo) setColorMarco("#000000");
        } else if (categoria === "fondo") {
          setColorFondo("#000000");
          if (!conMarco || colorMarco === colorQr) setColorMarco("#000000");
        }
        break;
      case "blanco":
        if (categoria === "qr") {
          setColorQr("#FFFFFF");
          if (!conMarco || colorMarco === colorFondo) setColorMarco("#FFFFFF");
        } else if (categoria === "fondo") {
          setColorFondo("#FFFFFF");
          if (!conMarco || colorMarco === colorQr) setColorMarco("#FFFFFF");
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-4 max-w-xl mx-auto md:max-w-2xl">
      <h1 className="tracking-in-contract-bck-top text-xl mb-4">Generador de QR</h1>

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
            onClick={limpiarEntrada}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-lg"
          >
            <IoCloseCircleOutline />
          </button>
        )}
      </div>

      <div className="w-full grid grid-cols-2 gap-6">
        {/* Columna 1: QR */}
        <div className="space-y-2">
          <label className="block text-sm text-white/80 text-center">Color del QR:</label>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => establecerColores("negro", "qr")}
              className={`w-10 h-10 bg-black rounded border border-white/80 hover:bg-gray-800 transition-colors relative ${colorQr === "#000000"
                  ? "after:content-[''] after:absolute after:w-8 after:h-0.5 after:bg-violeta-marca after:bottom-0 after:left-1 after:transform after:translate-y-3"
                  : ""
                }`}
            />
            <button
              onClick={() => establecerColores("blanco", "qr")}
              className={`w-10 h-10 bg-white rounded border border-white/80 hover:bg-gray-200 transition-colors relative ${colorQr === "#FFFFFF"
                  ? "after:content-[''] after:absolute after:w-8 after:h-0.5 after:bg-violeta-marca after:bottom-0 after:left-1 after:transform after:translate-y-3"
                  : ""
                }`}
            />
            {/* Cuadrado "Edit" para el QR */}
            <div className="flex flex-col items-center">
              <div className="relative w-10 h-10 border border-white/80 rounded overflow-hidden">
                <input
                  type="color"
                  value={colorQr}
                  onChange={(e) => setColorQr(e.target.value)}
                  className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <p className="text-xs text-violeta-marca font-bold">Edit</p>
                </div>
              </div>
              {/* Línea debajo del cuadrado "Edit" por fuera */}
              {colorQr !== "#000000" && colorQr !== "#FFFFFF" && (
                <div className="w-8 h-0.5 bg-violeta-marca mt-1"></div>
              )}
            </div>
          </div>
        </div>

        {/* Columna 2: Fondo */}
        <div className="space-y-2">
          <label className="block text-sm text-white/80 text-center">Color de fondo:</label>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => establecerColores("negro", "fondo")}
              className={`w-10 h-10 bg-black rounded border border-white/80 hover:bg-gray-800 transition-colors relative ${colorFondo === "#000000"
                  ? "after:content-[''] after:absolute after:w-8 after:h-0.5 after:bg-violeta-marca after:bottom-0 after:left-1 after:transform after:translate-y-3"
                  : ""
                }`}
            />
            <button
              onClick={() => establecerColores("blanco", "fondo")}
              className={`w-10 h-10 bg-white rounded border border-white/80 hover:bg-gray-200 transition-colors relative ${colorFondo === "#FFFFFF"
                  ? "after:content-[''] after:absolute after:w-8 after:h-0.5 after:bg-violeta-marca after:bottom-0 after:left-1 after:transform after:translate-y-3"
                  : ""
                }`}
            />
            {/* Cuadrado "Edit" para el fondo */}
            <div className="flex flex-col items-center">
              <div className="relative w-10 h-10 border border-white/80 rounded overflow-hidden">
                <input
                  type="color"
                  value={colorFondo}
                  onChange={(e) => setColorFondo(e.target.value)}
                  className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <p className="text-xs text-violeta-marca font-bold">Edit</p>
                </div>
              </div>
              {/* Línea debajo del cuadrado "Edit" por fuera */}
              {colorFondo !== "#000000" && colorFondo !== "#FFFFFF" && (
                <div className="w-8 h-0.5 bg-violeta-marca mt-1"></div>
              )}
            </div>
          </div>
        </div>
      </div>


      {/* Botón de marco y opciones */}
      <div className="w-full space-y-2">
        <button
          onClick={() => setConMarco(!conMarco)}
          className="w-full py-2 text-sm uppercase font-bold rounded-xl border border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
        >
          {conMarco ? "Ocultar marco" : "Agregar marco"}
        </button>
        {conMarco && (
          <div className="w-full grid grid-cols-2 gap-6 mt-2">
            {/* Columna 1: Color del marco */}
            <div className="space-y-2">
              <label className="block text-sm text-white/80">Color del marco:</label>
              <input
                type="color"
                value={colorMarco}
                onChange={(e) => setColorMarco(e.target.value)}
                className="w-10 h-10 ml-2 border border-white/80 rounded"
              />
            </div>

            {/* Columna 2: Grosor del marco con botones */}
            <div className="space-y-2">
              <label className="block text-sm text-white/80">Grosor del marco:</label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={disminuirGrosor}
                  disabled={grosorMarco <= 1}
                  className={`w-10 h-10 text-white/80 font-bold rounded-lg border border-violeta-marca ${grosorMarco <= 1
                    ? "text-gray-500 cursor-not-allowed"
                    : "hover:bg-violeta-marca/30 hover:text-white"
                    } transition-colors`}
                >
                  -
                </button>
                <span className="text-white/80">{grosorMarco}px</span>
                <button
                  onClick={aumentarGrosor}
                  disabled={grosorMarco >= 20}
                  className={`w-10 h-10 text-white/80 font-bold rounded-lg border border-violeta-marca ${grosorMarco >= 20
                    ? "text-gray-500 cursor-not-allowed"
                    : "hover:bg-violeta-marca/30 hover:text-white"
                    } transition-colors`}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Botón de bordes redondeados */}
      <button
        onClick={() => setBordesRedondeados(!bordesRedondeados)}
        className="w-full py-2 text-sm uppercase font-bold rounded-xl border border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
      >
        {bordesRedondeados ? "Quitar bordes redondeados" : "Bordes redondeados (QR y marco)"}
      </button>

      <div ref={qrRef} className="p-3 bg-violeta-marca/30 rounded-lg">
        <QRCode
          value={urlQr}
          size={256}
          level="H"
          includeMargin={true}
          fgColor={colorQr}
          bgColor="transparent"
          renderAs="canvas"
          style={
            bordesRedondeados
              ? {
                borderRadius: "10px",
                ...(conMarco && {
                  border: `${grosorMarco}px solid ${colorMarco}`,
                  borderRadius: `${grosorMarco + 10}px`
                })
              }
              : conMarco
                ? { border: `${grosorMarco}px solid ${colorMarco}` }
                : undefined
          }
        />
      </div>

      <div className="w-full grid grid-cols-1 gap-4">
        <button
          onClick={() => descargarCodigoQr(true)}
          className={`w-full py-3 text-sm uppercase font-bold rounded-xl border border-violeta-marca ${esValido
            ? "hover:bg-violeta-marca/30 hover:text-white"
            : "text-gray-500 cursor-not-allowed"
            } transition-colors`}
          disabled={!esValido}
        >
          Descargar con fondo
        </button>
        <button
          onClick={() => descargarCodigoQr(false)}
          className={`w-full py-3 text-sm uppercase font-bold rounded-xl border border-violeta-marca ${esValido
            ? "hover:bg-violeta-marca/30 hover:text-white"
            : "text-gray-500 cursor-not-allowed"
            } transition-colors`}
          disabled={!esValido}
        >
          Descargar sin fondo
        </button>
      </div>
    </div>
  );
};

export default GeneradorQr;