import React from "react";

const HeroAnimation = () => {
  return (
    <div
      className="mtanim-container"
      style={{ "--max-rows": "3", "--max-cols": "13" }}
    >
      <div className="mtanim-slide">
        <div className="flex">
          {/* Repite la estructura interna */}
          <div className="mtanim-cell">
            <span>E</span>
          </div>
          <div className="mtanim-cell">
            <span>N</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
