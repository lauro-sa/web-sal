import React from "react";
import "./FirmaSal.css";

const FirmaSal = () => {
  return (
    <a href="https://stianlauro.com/" style={{ textDecoration: "none" }}>
      <div className="signature">
        <span className="main-text sa">SA</span>
        <div className="hover-text">
          <span className="name">StianLauro</span>
          <span className="title">Developer</span>
        </div>
        <span className="main-text l">L</span>
      </div>
    </a>
  );
};

export default FirmaSal;
