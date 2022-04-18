import React from "react";
import "./Text.css";

function Text(props) {
  return (
    <div className="text-47">
      <div className="name valign-text-middle poppins-medium-martinique-24px">
        <span className="poppins-medium-martinique-24px">{props.title ? props.title : ''}</span>
      </div>
      <div className="wiz-kid-ft-burna-boy valign-text-middle poppins-normal-storm-gray-20px">
        <span className="poppins-normal-storm-gray-20px">{props.singer ? props.singer : ''}</span>
      </div>
    </div>
  );
}

export default Text;
