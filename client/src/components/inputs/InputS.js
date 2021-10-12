import React, { useState } from "react";

//?STYLES
import "./InputS.css";

const InputS = ({ cName, type, placeholder, id, value, handleChange }) => {
  return (
    <div className={"Input-single " + cName}>
      <input
        autoComplete="off"
        className="is-input"
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
      />
      <label className="is-label" htmlFor={id}>
        {placeholder}
      </label>
    </div>
  );
};

export default InputS;
