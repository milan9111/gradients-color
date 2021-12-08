import React from "react";
import { Link } from "react-router-dom";



const New = ({changeFirstColor, changeSecondColor, addGradient, activeDisable}) => {
    

     

    return (
      <div>
         New
          <div><input type="text" onChange={changeFirstColor} /></div> 
          <div><input type="text" onChange={changeSecondColor}/></div>
          <div>
            <Link to='/' onClick={addGradient}><button disabled={activeDisable}>add gradient</button></Link>
          </div>
          <div>
            <Link to='/'>back</Link>
          </div>
      </div>
    );
  }
  
export default New;