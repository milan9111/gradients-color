import React, { useState } from "react";
import App from "./App";
import ContextColors from "./contexts/ContextColors";

const AppContainer = () => {
  const [colors, setColors] = useState(
    JSON.parse(localStorage.getItem("dataColors")) || []
  );
  localStorage.setItem("dataColors", JSON.stringify(colors));
  return (
    <div>
      <ContextColors.Provider value={colors}>
        <App setColors={setColors} />
      </ContextColors.Provider>
    </div>
  );
};

export default AppContainer;
