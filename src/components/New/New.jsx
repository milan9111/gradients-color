import React from "react";
import { Link } from "react-router-dom";

const New = ({
  changeFirstColor,
  changeSecondColor,
  addGradient,
  activeDisable,
}) => {
  return (
    <section className="new__container">
      <div className="new__title title">new</div>
      <div className="new__inputs">
        <div className="input">
          <input type="text" placeholder="#..." onChange={changeFirstColor} />
        </div>
        <div className="input">
          <input type="text" placeholder="#..." onChange={changeSecondColor} />
        </div>
      </div>
      <div className="new__add-button">
        <Link to="/" onClick={addGradient}>
          <button disabled={activeDisable}>add gradient</button>
        </Link>
      </div>
      <div className="new__back-button">
        <Link to="/">
          <button>back</button>
        </Link>
      </div>
    </section>
  );
};

export default New;
