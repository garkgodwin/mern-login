import React from "react";

//?STYLES
import "./Button.css";

const Button = ({
  cName,
  text,
  handleClick = null,
  type = "button",
  icon = null,
}) => {
  //button types = submit, reset, button
  return (
    <button className={"Button " + cName} onClick={handleClick} type={type}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
