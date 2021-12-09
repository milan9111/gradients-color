import React, { useContext } from "react";
import ContextColors from "../../contexts/ContextColors";
import { Link } from "react-router-dom";
import Home from "./Home";

const HomeContainer = ({ setColors }) => {
  const colors = useContext(ContextColors);

  const removeGradient = (event) => {
    let editIndex = colors.findIndex(
      (item) => item.id === Number(event.target.id)
    );
    colors.splice(editIndex, 1);
    setColors([...colors]);
  };

  return colors?.length > 0 ? (
    <section className="home__container">
      <div className="home__title title">home</div>
      <div className="home__button">
        <Link to="/new">
          <button>add new gradient</button>
        </Link>
      </div>
      <ul className="home__list">
        {colors.map((item) => (
          <Home
            key={item.id}
            id={item.id}
            firstColor={item.firstColor}
            secondColor={item.secondColor}
            removeGradient={removeGradient}
          />
        ))}
      </ul>
    </section>
  ) : (
    <section className="home__container">
      <div className="home__title title">home</div>
      <div className="home__text">Please, add colors...</div>
      <div className="home__button">
        <Link to="/new">
          <button>add new gradient</button>
        </Link>
      </div>
    </section>
  );
};

export default HomeContainer;
