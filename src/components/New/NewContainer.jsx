import React, {useState, useContext, useEffect} from "react";
import ContextColors from "../../contexts/ContextColors";
import { validateHex } from "../../helpers/validation";
import New from "./New";


const NewContainer = ({setColors}) => {

    const colors = useContext(ContextColors);
    const [firstColor, setFirstColor] = useState();
    const [secondColor, setSecondColor] = useState();
    const [validFirstColor, setValidFirstColor] = useState(false);
    const [validSecondColor, setValidSecondColor] = useState(false); 
    const [activeDisable, setActiveDisable] = useState(true);
    
    useEffect(() => {
       validFirstColor === true && validSecondColor === true ? setActiveDisable(false) : setActiveDisable(true);
    }, [validFirstColor, validSecondColor]);

    const changeFirstColor = (event) => {
        if(validateHex(event.target.value) && event.target.value.length > 3) {
            setValidFirstColor(true);
            setFirstColor(event.target.value);
        } else {
            setValidFirstColor(false);
        } 
    }
    
    const changeSecondColor = (event) => {
        if(validateHex(event.target.value) && event.target.value.length > 3) {
            setValidSecondColor(true);
            setSecondColor(event.target.value);
        } else {
            setValidSecondColor(false);
        }
    }

    const addGradient = () => {
        let newGradient = {};
        newGradient.id = new Date().getTime();
        newGradient.firstColor = firstColor;
        newGradient.secondColor = secondColor;
        setColors([...colors, newGradient]);
    }

    return (
      <div>
        <New changeFirstColor={changeFirstColor} changeSecondColor={changeSecondColor} addGradient={addGradient} activeDisable={activeDisable}/>
      </div>
    );
  }
  
export default NewContainer;