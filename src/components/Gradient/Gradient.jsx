import React from "react";
import { Link } from "react-router-dom";

const Gradient = ({ id, firstColor, secondColor, removeGradient }) => {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${firstColor}, ${secondColor})`,
      }}
    >
      <div className="home__buttons">
        <div className="buttons__edit">
          <Link to={`/edit/${id}`}>
            <button>&#9998;</button>
          </Link>
        </div>
        <div className="buttons__remove">
          <button id={id} onClick={removeGradient}>
            x
          </button>
        </div>
      </div>
      <div className="home__colors">
        <div className="home__color">{firstColor}</div>
        <div className="home__color">{secondColor}</div>
      </div>
    </div>
  );
};

export default Gradient;
