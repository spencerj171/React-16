import React from "react";
import "./Course.css";

const course = (props) => {
  return (
    <div className="Course" onClick={props.clicked} style={props.style}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default course;
