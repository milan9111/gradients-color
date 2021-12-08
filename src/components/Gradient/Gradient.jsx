import React from "react";
import { Link } from "react-router-dom";



const Gradient = ({id, firstColor, secondColor}) => {
    return (
      <div style={{background: `linear-gradient(270deg, ${firstColor}, ${secondColor})`}}>
           <div>
              {firstColor}
           </div>
           <div>
              {secondColor}
           </div>
           <div>
             <Link to={`/edit/${id}`}>edit</Link>
           </div>
           <div id={id}>
             <button>del</button>
           </div>
      </div>
    );
  }
  
export default Gradient;