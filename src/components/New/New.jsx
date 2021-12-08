import React from "react";
import { Link } from "react-router-dom";



const New = () => {
    return (
      <div>
         New
         <div><input type="text"/></div>
          <div><input type="text"/></div>
          <div>
            <Link to='/'>add gradient</Link>
          </div>
          <div>
            <Link to='/'>back</Link>
          </div>
      </div>
    );
  }
  
export default New;