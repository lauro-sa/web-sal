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

const FondoFijo = () => {
  const [dots, setDots] = useState([]);
  const spacing = 100;
  const extraBottomOffset = 100;

  const initializeDots = () => {
    const contentHeight = Math.max(document.body.scrollHeight, window.innerHeight);
    const numColumns = window.innerWidth < 800 ? 7 : 12;
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
    const updateDots = () => {
      setDots(initializeDots());
    };

    // Observer para detectar cambios en el contenido
    const observer = new MutationObserver(updateDots);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });

    // Generar puntos al montar el componente
    updateDots();

    window.addEventListener("resize", updateDots);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateDots);
    };
  }, []);

  return (
    <div
      className="absolute top-0 left-0 right-0 z-0 overflow-hidden"
      style={{ backgroundColor: "#10151d", height: `${Math.max(document.body.scrollHeight, window.innerHeight)}px` }}
    >
      <DiffuseLight />
      {dots.map((dot, index) => (
        <Dot key={index} top={dot.top} left={dot.left} />
      ))}
    </div>
  );
};

export default FondoFijo;
