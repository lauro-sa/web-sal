import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { readAndCompressImage } from "browser-image-resizer";
import "../../../estilos.css";

const ConversorImg = () => {
  const [file, setFile] = useState(null);
  const [imagen, setImagen] = useState(null);
  const [imagenDescargable, setImagenDescargable] = useState(null);
  const [progreso, setProgreso] = useState(0);
  const [formatoOriginal, setFormatoOriginal] = useState("");
  const [formato, setFormato] = useState("");
  const [calidad, setCalidad] = useState(70);
  const [ancho, setAncho] = useState("");
  const [alto, setAlto] = useState("");
  const [tamañoOriginal, setTamañoOriginal] = useState(0);
  const [tamañoConvertido, setTamañoConvertido] = useState(0);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileType = file.type;

    if (
      ["image/jpeg", "image/png", "image/gif", "image/bmp"].includes(fileType)
    ) {
      setFile(file);
      setFormatoOriginal(file.type.split("/")[1]);
      setProgreso(10);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagen(e.target.result);
        const img = new Image();
        img.onload = () => {
          setAncho(img.width);
          setAlto(img.height);
          setTamañoOriginal(file.size);
          setProgreso(50);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Tipo de archivo no admitido:", fileType);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png, image/gif, image/bmp",
  });

  const convertirImagen = async () => {
    setProgreso(50);
    try {
      const resizedImage = await readAndCompressImage(file, {
        quality: calidad / 100,
        maxWidth: parseInt(ancho),
        maxHeight: parseInt(alto),
        mimeType: `image/${formato}`,
        debug: true,
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagenDescargable(reader.result);
        setProgreso(100);
        setTamañoConvertido(resizedImage.size);
      };
      reader.readAsDataURL(resizedImage);
    } catch (error) {
      console.error("Error al procesar la imagen:", error);
    }
  };

  const descargarImagen = () => {
    if (imagenDescargable) {
      const link = document.createElement("a");
      link.href = imagenDescargable;
      link.download = `convertida.${formato}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="p-4">
      <h1 className="tracking-in-contract-bck-top text-xl mb-8">
        Convertidor de Imagenes
      </h1>
      <p>
        Arrastra tu imagen a la carpeta o hace clic en ella para seleccionarla
      </p>
      {progreso > 0 && <div>Progreso: {progreso}%</div>}
      <div className="flex justify-between mt-4">
        <div className="flex flex-col items-start bg-cover">
          <div
            {...getRootProps({
              className:
                "w-40 h-40 p-6  cursor-pointer flex justify-center items-center transition-transform duration-300 hover:scale-110 opacity-50 hover:opacity-100",
            })}
          >
            <input {...getInputProps()} />
            <img
              src={imagen || "img/laboratorio/img-agregar-conversor.png"}
              alt="Original"
              className="w-full h-full object-cover"
            />
          </div>
          <p>
            {file
              ? `Original - ${formatoOriginal.toUpperCase()}, ${ancho}x${alto}`
              : "Imagen Original"}
          </p>
          <p className="mb-8">
            {file
              ? `Tamaño: ${(tamañoOriginal / 1024).toFixed(2)} KB`
              : "Esperando imagen..."}
          </p>
        </div>
        <div className="flex flex-col items-start bg-cover">
          <div className="w-40 h-40 p-4">
            <img
              src={imagenDescargable || "img/laboratorio/img-conversor.png"}
              alt="Procesada"
              className="w-full h-full object-cover"
            />
          </div>
          <p>
            {file
              ? `Procesada - ${formato.toUpperCase()}, ${ancho}x${alto}`
              : "Imagen Procesada"}
          </p>
          <p className="mb-8">
            {file
              ? `Tamaño: ${(tamañoConvertido / 1024).toFixed(2)} KB`
              : "Esperando conversión..."}
          </p>
        </div>
      </div>

      <div className="mt-2 space-y-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0  items-center mt-2 text-white">
          <select
            value={formato}
            onChange={(e) => setFormato(e.target.value)}
            className="w-40 p-2 bg-transparent border-2 border-white/80 hover:border-white rounded-md placeholder-white focus:outline-none focus:border-violeta-marca appearance-none mx-2 cursor-pointer"
          >
            <option className="bg-black text-white" value="" disabled>
              Selec Formato
            </option>{" "}
            {/* Placeholder option */}
            <option className="bg-black text-white" value="jpeg">
              Formato - JPEG
            </option>
            <option className="bg-black text-white" value="png">
              Formato - PNG
            </option>
            <option className="bg-black text-white" value="webp">
              Formato - WEBP
            </option>
            <option className="bg-black text-white" value="bmp">
              Formato - BMP
            </option>
          </select>

          <div className="flex space-x-4 md:space-x-0">
            <div className="relative">
              <input
                type="number"
                value={ancho}
                onChange={(e) => setAncho(parseInt(e.target.value))}
                placeholder="Ancho ( px )"
                className="w-36 p-2 bg-transparent border-2 border-white/80 hover:border-white rounded-md placeholder-white focus:outline-none focus:border-violeta-marca appearance-none mx-2"
              />
            </div>
            <div className="relative">
              <input
                type="number"
                value={alto}
                onChange={(e) => setAlto(parseInt(e.target.value))}
                placeholder="Alto ( px )"
                className="w-36 p-2 bg-transparent border-2 border-white/80 hover:border-white rounded-md placeholder-white focus:outline-none focus:border-violeta-marca appearance-none mx-2"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <label className="font-semibold text-texto-claro">Calidad:</label>
          <input
            type="range"
            min="1"
            max="100"
            value={calidad}
            onChange={(e) => setCalidad(parseInt(e.target.value))}
            className="w-full h-2 rounded-md cursor-pointer appearance-none"
            style={{ "--tw-range-progress": `${calidad}%` }} // CSS Variable para el progreso
          />
          <span className=" text-white">{calidad}%</span>
        </div>

        <button
          onClick={convertirImagen}
          disabled={progreso !== 50}
          className="px-4 py-3 text-center text-[10px] md:text-sm uppercase tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors mt-8"
        >
          Convertir Imagen
        </button>
        <button
          onClick={descargarImagen}
          disabled={progreso !== 100}
          className={`btn ${
            progreso === 100
              ? "px-4 py-3 text-center text-[10px] md:text-sm uppercase tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors mt-8"
              : "px-4 py-3 text-center text-[10px] md:text-sm uppercase tracking-wider font-bold text-gray-500 cursor-not-allowed mt-8"
          }`}
        >
          Descargar Imagen
        </button>
      </div>
    </div>
  );
};

export default ConversorImg;
