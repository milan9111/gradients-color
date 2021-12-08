import React from "react";
import Gradient from "../Gradient/Gradient";

 
const Home = ({id, firstColor, secondColor}) => {
     
    

    return (
      <div>
          <Gradient id={id} firstColor={firstColor} secondColor={secondColor}/>
      </div>
    );
  }
  
export default Home;
  