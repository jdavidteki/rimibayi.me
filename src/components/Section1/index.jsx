import React from "react";
import "./Section1.css";

function Section1(props) {
  const { src } = props;

  return (
    <div className="section1-1">
      <div className="component-16-1">
        <img className="logo-2" src={src} />
      </div>
    </div>
  );
}

export default Section1;
