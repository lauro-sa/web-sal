import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { IoCloseCircleOutline } from "react-icons/io5";

const GeneradorQrWifi = () => {
  const [nombreRed, setNombreRed] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [esValido, setEsValido] = useState(false);

  const generarQR = () => {
    if (nombreRed && contrasena) {
      const qrData = `WIFI:T:WPA;S:${nombreRed};P:${contrasena};;`;
      setQrValue(qrData);
      setEsValido(true);
    } else {
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
      downloadLink.download = `QR_WiFi_${nombreRed}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const limpiarInput = () => {
    setNombreRed("");
    setContrasena("");
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="tracking-in-contract-bck-top text-xl mb-8">
        Generador de QR Wi-Fi
      </h1>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Nombre de la red (SSID)"
          value={nombreRed}
          onChange={(e) => setNombreRed(e.target.value)}
          className="w-full h-12 text-md text-white/80 placeholder-gray-400 bg-transparent border-2 border-white rounded-lg pl-3 pr-10 text-center focus:outline-none focus:ring-2 focus:ring-violeta-marca"
        />
        <input
          type="text"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          className="w-full h-12 text-md text-white/80 placeholder-gray-400 bg-transparent border-2 border-white rounded-lg pl-3 pr-10 text-center focus:outline-none focus:ring-2 focus:ring-violeta-marca mt-4"
        />
        {(nombreRed || contrasena) && (
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
          nombreRed.trim() !== "" && contrasena.trim() !== ""
            ? "px-4 py-3 text-center text-[10px] md:text-sm uppercase tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
            : "px-4 py-3 text-center text-[10px] md:text-sm uppercase tracking-wider font-bold text-gray-500 cursor-not-allowed"
        }`}
        disabled={nombreRed.trim() === "" || contrasena.trim() === ""}
      >
        Generar QR
      </button>
      {esValido && (
        <div className="mt-6">
          <QRCodeCanvas id="qrCanvas" value={qrValue} size={256} />
        </div>
      )}
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

export default GeneradorQrWifi;
