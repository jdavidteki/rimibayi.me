import React from "react";
import "./Trending2.css";

function Trending2(props) {
  const { className } = props;

  return (
    <div onClick={props.trigger} className={`trending-11 ${className || ""}`}>
      <div className="begin-round poppins-medium-martinique-20px">
        <span className="spanau0eng poppins-medium-martinique-20px">{props.buttontext}</span>
      </div>
    </div>
  );
}

export default Trending2;
