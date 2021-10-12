import React from "react";

//?STYLES
import "./InputS.css";

const InputS = ({ cName, type, placeholder }) => {
  return (
    <input
      className={"Input-single " + cName}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputS;
