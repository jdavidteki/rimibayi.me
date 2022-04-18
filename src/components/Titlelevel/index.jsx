import React from "react";
import "./Titlelevel.css";
import beginnerImage from "../../../static/img/-level-1@2x.png";
import amateurImage from "../../../static/img/-level-2@2x.png";
import ancestorLogo from "../../../static/img/-level-3@2x.png";

function Titlelevel(props) {
  const { className } = props;

  let difficultyLevelToImage = {
    "beginner": beginnerImage,
    "amateur": amateurImage,
    "ancestor": ancestorLogo,
  }

  return (
    <div className={`titlelevel ${className || ""}`}>
      <div className="guess-the-song-6 valign-text-middle poppins-medium-martinique-24px">
        <span>
          <span className="spanr6zmq poppins-medium-martinique-24px">{props.title}</span>
        </span>
      </div>
      <img className="level-7" src={`${difficultyLevelToImage[props.selectedOptionDifficulty]}`} />
    </div>
  );
}

export default Titlelevel;
