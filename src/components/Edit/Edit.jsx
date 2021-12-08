import React from "react";
import { Link } from "react-router-dom";

const Edit = ({selectedColor}) => {
    
    return (
      <div>
         <div><input type="text" defaultValue={selectedColor[0].firstColor} /></div>
          <div><input type="text" defaultValue={selectedColor[0].secondColor} /></div>
          <div>
            <Link to='/'>save gradient</Link>
          </div>
          <div>
            <Link to='/'>back</Link>
          </div>
      </div>
    );
  }
  
export default Edit;