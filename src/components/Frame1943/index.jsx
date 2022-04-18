import React from "react";
import "./Frame1943.css";
import StarLogo from "../../../static/img/score-2@2x.png"

function Frame1943(props) {
  const { className } = props;

  return (
    <div className={`frame-194-4 ${className || ""}`}>
      <img className="score-5" src={StarLogo} />
      <div className="number-10 valign-text-middle poppins-medium-martinique-20px">
        <span>
          <span className="span4cmxd poppins-medium-martinique-20px">{props.score}</span>
        </span>
      </div>
    </div>
  );
}

export default Frame1943;
