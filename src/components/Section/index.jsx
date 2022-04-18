import React from "react";
import "./Section.css";

import vector19Data from "../../../static/img/vector-18-2@2x.png"

function Section(props) {
  const { className } = props;

  return (
    <div className={`section ${className || ""}`}>
      <img className="vector-19" src={vector19Data} />
      <div className="trending-6 poppins-normal-white-24px">
        <span className="spanu8znqj poppins-normal-white-24px">yokigames 🎯</span>
      </div>
      <img className="vector-18" src={vector19Data} />
    </div>
  );
}

export default Section;
