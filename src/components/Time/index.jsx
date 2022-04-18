import React from "react";
import "./Time.css";

function Time(props) {
  const { timer, spanText, className } = props;

  return (
    <div className={`time-6 ${className || ""}`}>
      <img className="timer-5" src={timer} />
      <div className="text-10-1 valign-text-middle poppins-medium-martinique-24px">
        <span>
          <span className="spanfew1j poppins-medium-martinique-24px">{spanText}</span>
        </span>
      </div>
    </div>
  );
}

export default Time;
