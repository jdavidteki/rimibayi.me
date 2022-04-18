import React from "react";
import "./Section3.css";
import trendingLine from "../../../static/img/vector-18-1@2x.png"

function Section3() {
  return (
    <div className="section-5">
      <div className="trending-9 poppins-normal-white-20px">
        <span className="poppins-normal-white-20px">trending 🔥</span>
      </div>
      <img className="vector-18-3" src={trendingLine} />
    </div>
  );
}

export default Section3;
