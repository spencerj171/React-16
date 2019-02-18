import React from "react";
import "./Char.css";

const charComponent = (props) => {
  return <div className="Char" onClick={props.onClick}>{props.char}</div>;
}

export default charComponent;
