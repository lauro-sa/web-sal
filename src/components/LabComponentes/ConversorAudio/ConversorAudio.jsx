import React, { useState } from "react";

const ConversorAudio = () => {
  const [archivo, setArchivo] = useState(null);
  const [archivoConvertido, setArchivoConvertido] = useState(null);
  const [progresoCarga, setProgresoCarga] = useState(0);
  const [progresoConversión, setProgresoConversión] = useState(0);
  const [progresoDescarga, setProgresoDescarga] = useState(0);
  const [formato, setFormato] = useState("mp3");
  const [mensaje, setMensaje] = useState("");

  const cargarArchivo = (e) => {
    const file = e.target.files[0];
    setArchivo(file);
    const reader = new FileReader();
    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        const porcentaje = Math.round((event.loaded / event.total) * 100);
        setProgresoCarga(porcentaje); // Actualiza el progreso de carga
      }
    };
    reader.onloadend = () => {
      setProgresoCarga(100);
      setMensaje("Archivo cargado");
      setTimeout(() => setProgresoConversión(0), 1500);
    };
    reader.readAsDataURL(file);
  };

  const convertirAudio = () => {
    // Simulación de progreso de conversión
    const interval = setInterval(() => {
      setProgresoConversión((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setMensaje(`Conversión a ${formato} completada`);
          setArchivoConvertido(archivo); // Simula que el archivo convertido es el mismo
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const descargarAudio = () => {
    if (!archivoConvertido) return;
    const url = URL.createObjectURL(archivoConvertido);
    const a = document.createElement("a");
    a.href = url;
    a.download = archivoConvertido.name.replace(/\.\w+$/, "") + `.${formato}`; // Cambia la extensión según el formato
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setProgresoDescarga(100);
    setMensaje("Archivo descargado");
  };

  return (
    <div className="flex flex-col items-center p-4">
      <input type="file" onChange={cargarArchivo} className="mb-4" />
      <div>Progreso de carga: {progresoCarga}%</div>
      <select
        value={formato}
        onChange={(e) => setFormato(e.target.value)}
        className="mb-4"
      >
        <option value="mp3">MP3</option>
        <option value="wav">WAV</option>
        <option value="aac">AAC</option>
        <option value="ogg">OGG</option>
      </select>
      <button
        onClick={convertirAudio}
        disabled={progresoCarga !== 100}
        className="btn-primary"
      >
        Convertir
      </button>
      <div>Progreso de conversión: {progresoConversión}%</div>
      <button
        onClick={descargarAudio}
        disabled={progresoConversión !== 100}
        className="btn-secondary"
      >
        Descargar
      </button>
      <div>Progreso de descarga: {progresoDescarga}%</div>
      {mensaje && <div>{mensaje}</div>}
      {archivoConvertido && (
        <div className="flex mt-4">
          <div>
            <h4>Original:</h4>
            <audio controls src={URL.createObjectURL(archivo)} />
          </div>
          <div>
            <h4>Convertido:</h4>
            <audio controls src={URL.createObjectURL(archivoConvertido)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversorAudio;
