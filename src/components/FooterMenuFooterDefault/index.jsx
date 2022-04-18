import React from "react";
import Offline from "../Offline";
import YokiThoughts from "../YokiThoughts";

import twitterIcon from "../../../static/img/twitter---negative-1@2x.png";
import instagramIcon from "../../../static/img/instagram---negative-1@2x.png";

import "./FooterMenuFooterDefault.css";

function FooterMenuFooterDefault(props) {
  const { className } = props;

  return (
    <div className={`footer-default ${className || ""}`}>
      <div className="frame-142">
        <div className="frame-255 poppins-normal-white-17px">
          <div className="text-10">
            <span className="span-58 poppins-normal-white-17px"><Offline /></span>
          </div>
          <div className="text-12">
            <span className="span-58 poppins-normal-white-17px"><YokiThoughts /></span>
          </div>
        </div>
        <div className="frame-140">
          <a href="https://www.twitter.com/rimibayi/"  target="_blank"><img className="twitter-negative" src={twitterIcon} /></a>
          <a href="https://www.instagram.com/rimibayi/"  target="_blank"><img className="instagram-negative" src={instagramIcon} /></a>
        </div>
      </div>
    </div>
  );
}

export default FooterMenuFooterDefault;
