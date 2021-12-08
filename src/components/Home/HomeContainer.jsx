import React, { useContext } from "react";
import ContextColors from "../../contexts/ContextColors";
import { Link } from "react-router-dom";
import Home from "./Home";
 



const HomeContainer = () => {
    const dataColors = useContext(ContextColors);

    let showGradientColor = dataColors.map(item => <Home key={item.id} id={item.id} firstColor={item.firstColor} secondColor={item.secondColor}/>)

    return (
      <div>
          <div>HOME</div>
          {showGradientColor} 
          <div><Link to="/new">add new gradient</Link></div>
      </div>
    );
  }
  
export default HomeContainer;