import React from "react";
import "./X62.css";

import ancestorLogo from "../../../static/img/-level-3@2x.png";

function X62(props) {
  return (
    <div onClick={()=>props.handleChangeDifficulty(props.spanText)} className={`x6-8 ${props.className || ""}`}>
      <img className="level-4" src={ancestorLogo} />
      <div className="beginner-6 valign-text-middle poppins-normal-martinique-20px">
        <span>
          <span className="spanyt226 poppins-normal-martinique-20px">ancestor</span>
        </span>
      </div>
    </div>
  );
}

export default X62;
