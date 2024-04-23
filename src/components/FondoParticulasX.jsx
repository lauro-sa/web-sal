import React, { useEffect, useState } from "react";

const Dot = ({ top, left }) => {
  const style = {
    position: "absolute",
    top: `${top}px`,
    left: left,
    width: "4px",
    height: "4px",
    backgroundColor: "rgb(46, 60, 81)",
    borderRadius: "50%",
  };

  return <div style={style} />;
};

const DiffuseLight = () => {
  const size = "800px"; // Tamaño del círculo
  const style = {
    position: "absolute",
    top: "-550px", // Ajusta este valor para controlar cuánto del círculo quieres mostrar
    left: "50%",
    transform: "translateX(-50%)",
    width: size,
    height: size,
    background:
      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0) 60%, transparent 100%)",
    borderRadius: "50%",
    zIndex: "5",
    overflow: "hidden",
  };

  return <div style={style} />;
};

const FondoParticulasX = () => {
  const [contentHeight, setContentHeight] = useState(window.innerHeight);
  const [numColumns, setNumColumns] = useState(
    window.innerWidth < 800 ? 7 : 12
  );
  const [dots, setDots] = useState([]);
  const spacing = 100;
  const [speed, setSpeed] = useState(0.15); // Estado para controlar la velocidad

  const initializeDots = () => {
    const numRows = Math.ceil(contentHeight / spacing) + 0;
    const tempDots = [];

    for (let j = 0; j < numRows; j++) {
      for (let i = 0; i < numColumns; i++) {
        tempDots.push({
          top: j * spacing,
          left: `${(100 / numColumns) * i + 100 / numColumns / 2 - 1.5 / 2}%`,
        });
      }
    }
    return tempDots;
  };

  useEffect(() => {
    let tempDots = initializeDots();
    setDots(tempDots);

    const handleResize = () => {
      setContentHeight(
        Math.max(document.body.scrollHeight, window.innerHeight)
      );
      setNumColumns(window.innerWidth < 800 ? 7 : 12);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize); // Asegúrate de ajustar cuando se cargue completamente el contenido

    const interval = setInterval(() => {
      setDots((currentDots) =>
        currentDots
          .map((dot) => ({
            ...dot,
            top: dot.top - speed,
          }))
          .map((dot) => ({
            ...dot,
            top: dot.top < -spacing ? contentHeight - 100 : dot.top,
          }))
      );
    }, 16);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, [contentHeight, numColumns, speed]);

  return (
    <div
      className="absolute top-0 left-0 right-0 min-h-screen z-0 overflow-hidden"
      style={{ backgroundColor: "#10151d", height: `${contentHeight}px` }}
    >
      <DiffuseLight />
      {dots.map((dot, index) => (
        <Dot key={index} top={dot.top} left={dot.left} />
      ))}
    </div>
  );
};

export default FondoParticulasX;
