import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ContextColors from "../../contexts/ContextColors";
import Edit from "./Edit";

const EditContainer = () => {
    let params = useParams();
    const dataColors = useContext(ContextColors);
    let selectedColor = dataColors.filter(item => item.id === Number(params.id));
     
    return (
      <div>
         <Edit selectedColor={selectedColor}/>
      </div>
    );
  }

export default EditContainer;
  