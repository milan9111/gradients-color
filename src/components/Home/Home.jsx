import React from "react";
import Gradient from "../Gradient/Gradient";

const Home = ({ id, firstColor, secondColor, removeGradient }) => {
  return (
    <div>
      <Gradient
        id={id}
        firstColor={firstColor}
        secondColor={secondColor}
        removeGradient={removeGradient}
      />
    </div>
  );
};

export default Home;
