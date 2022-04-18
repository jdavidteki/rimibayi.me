import React from "react";
import Menu from "../Menu";
import "./Section2.css";
let randomNumber =  Math.floor(Math.random() * (11 - 1 + 1) + 1)

function Section2() {
  return (
    <div className="section-3">
      <div className="what-would-you-like-to-sing-to-today poppins-normal-white-24px">
        <span className="poppins-normal-white-24px">{randomNumber < 2 ? 'how your side?' : randomNumber < 4 ? 'wetin dey sup?' : randomNumber < 6 ? 'ekaabo!' : randomNumber < 9 ? 'the african a.i playhouse' : '#yokiworld' }</span>
      </div>
    </div>
  );
}

export default Section2;
