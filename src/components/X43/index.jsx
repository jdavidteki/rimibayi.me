import React from "react";
import "./X43.css";

function X43(props) {
  return (
    <div onClick={()=>props.handleChangeDifficulty(props.spanText)} className={`x4-2 ${props.className || ""}`}>
      <img className="level-3" src={props.level} />
      <div className="beginner-4 valign-text-middle poppins-normal-martinique-20px">
        <span>
          <span className="spanftwyf poppins-normal-martinique-20px">{props.spanText}</span>
        </span>
      </div>
    </div>
  );
}

export default X43;
