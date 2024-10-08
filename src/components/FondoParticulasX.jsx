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
  // Solo mostrar en pantallas más grandes (mayores a 768px)
  if (window.innerWidth < 768) {
    return null; // No renderizar en dispositivos móviles
  }

  const size = "800px";
  const style = {
    position: "absolute",
    top: "-550px",
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
  const extraBottomOffset = 100;
  const speed = 0.10;

  const initializeDots = () => {
    const numRows = Math.ceil(contentHeight / spacing) + 1;
    const tempDots = [];

    for (let j = 0; j < numRows; j++) {
      for (let i = 0; i < numColumns; i++) {
        tempDots.push({
          top: j * spacing + extraBottomOffset,
          left: `${(100 / numColumns) * i + 100 / numColumns / 2 - 1.5 / 2}%`,
        });
      }
    }
    return tempDots;
  };

  useEffect(() => {
    const handleResize = () => {
      setContentHeight(
        Math.max(document.body.scrollHeight, window.innerHeight)
      );
    };

    // MutationObserver para detectar cambios en el DOM
    const observer = new MutationObserver(() => {
      handleResize();
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false,
    });

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((currentDots) =>
        currentDots
          .map((dot) => ({
            ...dot,
            top: dot.top - speed,
          }))
          .filter((dot) => dot.top >= -spacing)
      );

      // Verifica si hay que generar más puntos
      setDots((currentDots) => {
        const numRows = Math.ceil(contentHeight / spacing) + 1;
        if (currentDots.length < numRows * numColumns) {
          return [...currentDots, ...initializeDots()];
        }
        return currentDots;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [contentHeight, numColumns, speed]);

  useEffect(() => {
    setDots(initializeDots());
  }, [contentHeight, numColumns]);

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
