import React from "react";
import "./Frame261.css";

import twitterLogo from "../../../static/img/twitter---negative-10@2x.png"
import instagramLogo from "../../../static/img/instagram---negative-10@2x.png"

function Frame261() {
  return (
    <div className="frame-261">
      <div className="frame-246">
        <div className="lets-connect poppins-normal-martinique-17px">
          <span className="poppins-normal-martinique-17px">make we connect!</span>
        </div>
        <div className="frame-140-10">
          <a href="https://www.twitter.com/rimibayi/"  target="_blank"><img className="twitter-negative" src={twitterLogo} /></a>
          <a href="https://www.instagram.com/rimibayi/"  target="_blank"><img className="instagram-negative" src={instagramLogo} /></a>
        </div>
      </div>
      <div className="buttons-10">
        <div className="text-53 valign-text-middle poppins-medium-pine-green-20px">
          <span>
            <span className="poppins-medium-pine-green-20px">close</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Frame261;
