import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContextColors from "../../contexts/ContextColors";
import { validateHex } from "../../helpers/validation";
import Edit from "./Edit";

const EditContainer = ({ setColors }) => {
  let params = useParams();
  const colors = useContext(ContextColors);
  let selectedColor = colors.filter((item) => item.id === Number(params.id));
  const [editFirstColor, setEditFirstColor] = useState(
    selectedColor[0].firstColor
  );
  const [editSecondtColor, setEditSecondColor] = useState(
    selectedColor[0].secondColor
  );
  const [validSaveFirstColor, setValidSaveFirstColor] = useState(true);
  const [validSaveSecondColor, setValidSaveSecondColor] = useState(true);
  const [saveEditDisable, setSaveEditDisable] = useState(false);

  useEffect(() => {
    validSaveFirstColor === true && validSaveSecondColor === true
      ? setSaveEditDisable(false)
      : setSaveEditDisable(true);
  }, [validSaveFirstColor, validSaveSecondColor]);

  const onEditFirstColor = (event) => {
    if (validateHex(event.target.value) && event.target.value.length > 3) {
      setValidSaveFirstColor(true);
      setEditFirstColor(event.target.value);
    } else {
      setValidSaveFirstColor(false);
    }
  };

  const onEditSecondColor = (event) => {
    if (validateHex(event.target.value) && event.target.value.length > 3) {
      setValidSaveSecondColor(true);
      setEditSecondColor(event.target.value);
    } else {
      setValidSaveSecondColor(false);
    }
  };

  const saveEditColor = () => {
    let newEditGradient = {};
    newEditGradient.id = Number(params.id);
    newEditGradient.firstColor = editFirstColor;
    newEditGradient.secondColor = editSecondtColor;
    let editIndex = colors.findIndex((item) => item.id === Number(params.id));
    colors.splice(editIndex, 1, newEditGradient);
    setColors([...colors]);
  };

  return (
    <div>
      <Edit
        editFirstColor={editFirstColor}
        editSecondColor={editSecondtColor}
        onEditFirstColor={onEditFirstColor}
        onEditSecondColor={onEditSecondColor}
        saveEditDisable={saveEditDisable}
        saveEditColor={saveEditColor}
      />
    </div>
  );
};

export default EditContainer;
