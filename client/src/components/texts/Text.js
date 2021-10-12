import React from "react";

//?STYLES
import "./Text.css";

const Text = ({ cName, text }) => {
  return <span className={"Text " + cName}>{text}</span>;
};

export default Text;
