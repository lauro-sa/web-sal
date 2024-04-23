import React from "react";
import ContenedorLayou1 from "./ContenedorLayou1";
import ContenedorLayou2 from "./ContenedorLayou2";
import InfoSal from "./InfoSal";

function LayouInfoSal() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center m-4">
      <ContenedorLayou1 className="flex flex-col justify-center items-center ">
        <div className="w-52 md:w-40 mb-4">
          <img
            src="/img/sal-01.png"
            alt="SAL"
            style={{ width: "100%", height: "auto" }}
            draggable="false"
          />
        </div>
        <p className="text-sm tracking-wider md:text-left">Developer</p>
        <p className="text-sm tracking-wider md:text-left">2020 - Presente</p>
      </ContenedorLayou1>
      <ContenedorLayou2 className="">
        <InfoSal />
      </ContenedorLayou2>
    </div>
  );
}

export default LayouInfoSal;
