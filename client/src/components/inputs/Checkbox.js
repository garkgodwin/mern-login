import React from "react";

//?STYLES
import "./Checkbox.css";

const Checkbox = ({ cName, id, text, checked, handleChange }) => {
  return (
    <label className={"Checkbox " + cName} htmlFor={id}>
      {text}
      <input
        className="cb-input"
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChange(e.target.checked)}
      />
    </label>
  );
};

export default Checkbox;
