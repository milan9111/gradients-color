import React, { useState } from "react";
import App from "./App";
import ContextColors from './contexts/ContextColors';

 

const AppContainer = () => {

const [colors, setColors] = useState([{id: 1, firstColor: 'red', secondColor: 'blue'}, {id: 2, firstColor: 'green', secondColor: 'yellow'}]);
  

  return (
    <div>
        <ContextColors.Provider value={colors}>
            <App />
        </ContextColors.Provider>   
    </div>
  );
}

export default AppContainer;
