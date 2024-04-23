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

const FondoParticulasX = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [numColumns, setNumColumns] = useState(
    window.innerWidth < 800 ? 7 : 12
  );
  const [dots, setDots] = useState([]);
  const spacing = 100;
  const [speed, setSpeed] = useState(0.15); // Estado para controlar la velocidad

  // Función para inicializar los puntos
  const initializeDots = () => {
    const numRows = Math.ceil(screenHeight / spacing) + 1;
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
      setScreenHeight(window.innerHeight);
      setNumColumns(window.innerWidth < 800 ? 7 : 12);
    };
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setDots((currentDots) =>
        currentDots
          .map((dot) => ({
            ...dot,
            top: dot.top - speed,
          }))
          .map((dot) => ({
            ...dot,
            top: dot.top < -spacing ? screenHeight - 100 : dot.top,
          }))
      );
    }, 16);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [screenHeight, numColumns, speed]);

  return (
    <div
      className="relative w-full max-w-7xl mx-auto h-screen overflow-hidden"
      style={{ backgroundColor: "#10151d" }}
    >
      {dots.map((dot, index) => (
        <Dot key={index} top={dot.top} left={dot.left} />
      ))}
    </div>
  );
};

export default FondoParticulasX;
