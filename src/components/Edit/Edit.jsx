import React from "react";
import { Link } from "react-router-dom";

const Edit = ({
  editFirstColor,
  editSecondColor,
  onEditFirstColor,
  onEditSecondColor,
  saveEditDisable,
  saveEditColor,
}) => {
  return (
    <section className="edit__container">
      <div className="edit__title title">edit</div>
      <div className="edit__inputs">
        <div className="input">
          <input
            type="text"
            placeholder="#..."
            defaultValue={editFirstColor}
            onChange={onEditFirstColor}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="#..."
            defaultValue={editSecondColor}
            onChange={onEditSecondColor}
          />
        </div>
      </div>
      <div className="edit__save-button">
        <Link to="/" onClick={saveEditColor}>
          <button disabled={saveEditDisable}>save gradient</button>
        </Link>
      </div>
      <div className="edit__back-button">
        <Link to="/">
          <button>back</button>
        </Link>
      </div>
    </section>
  );
};

export default Edit;
