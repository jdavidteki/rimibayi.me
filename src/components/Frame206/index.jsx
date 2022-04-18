import React from "react";
import X43 from "../X43";
import X62 from "../X62";
import "./Frame206.css";
import TextField from "@material-ui/core/TextField";
import vector19DataImage from "../../../static/img/vector-18-10@2x.png";
import beginnerImage from "../../../static/img/-level-1@2x.png";
import amateurImage from "../../../static/img/-level-2@2x.png";
import vector18Image from "../../../static/img/vector-18-11@2x.png";

function Frame206(props) {

  return (
    <div className="frame-206">
      <div className="frame-203">
        <div className="frame-2">
          <img className="vector-19-5" src={vector19DataImage} />
          <div className="player-name poppins-normal-black-17px">
            <span className="poppins-normal-black-17px">your name</span>
          </div>
          <img className="vector-18-7" src={vector19DataImage} />
        </div>
        <TextField
          // value={this.state.selectedOptionPlayerName}
          className="frame-206-player-input"
          variant="outlined"
          label="yokibot"
          onChange={props.handleChangePlayerName}
        />
      </div>
      <div className="frame-204">
        <div className="frame-2">
          <img className="vector-19-5" src={vector19DataImage} />
          <div className="select-difficulty poppins-normal-black-17px">
            <span className="poppins-normal-black-17px">select difficulty level</span>
          </div>
          <img className="vector-18-7" src={vector19DataImage} />
        </div>
        <div className="difficulty-2">
          <div className="overlap-group-43">
            <X43
              handleChangeDifficulty={props.handleChangeDifficulty}
              level={beginnerImage}
              spanText={'beginner'}
              className={`x10-1 level-name ${props.selectedOptionDifficulty == 'beginner' ? 'active': ''}`}
            />
            <X43
              handleChangeDifficulty={props.handleChangeDifficulty}
              level={amateurImage}
              spanText={'amateur'}
              className={`x11-1 level-name ${props.selectedOptionDifficulty == 'amateur' ? 'active': ''}`}
            />
            <X62
              handleChangeDifficulty={props.handleChangeDifficulty}
              spanText={'ancestor'}
              className={`x12-1 level-name ${props.selectedOptionDifficulty == 'ancestor' ? 'active': ''}`}
            />
          </div>
        </div>
      </div>
      <div className="frame-205">
        <div className="frame-2">
          <img className="vector-19-6" src={vector18Image} />
          <div className="set-duration poppins-normal-black-17px">
            <span className="poppins-normal-black-17px">set duration</span>
          </div>
          <img className="vector-18-8" src={vector18Image} />
        </div>
        <div className="duration-2">
          <div className="beginner-container poppins-normal-martinique-20px">
            <div
              onClick={()=>props.handleChangeDuration(1)}
              className={`beginner-12 valign-text-middle ${props.selectedOptionDuration == 1 ? 'active': ''}`}
            >
              <span>
                <span className="poppins-normal-martinique-20px">1 min</span>
              </span>
            </div>
            <div
              onClick={()=>props.handleChangeDuration(3)}
              className={`beginner-10 valign-text-middle ${props.selectedOptionDuration == 3 ? 'active': ''}`}
            >
              <span>
                <span className="poppins-normal-martinique-20px">3 mins</span>
              </span>
            </div>
            <div
              onClick={()=>props.handleChangeDuration(5)}
              className={`beginner-10 valign-text-middle ${props.selectedOptionDuration == 5 ? 'active': ''}`}
            >
              <span>
                <span className="poppins-normal-martinique-20px">5 mins</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame206;
