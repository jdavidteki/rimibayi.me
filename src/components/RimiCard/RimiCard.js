import React, { Component } from "react";
import Firebase from "../../firebase/firebase.js";


import "./RimiCard.css";

class RimiCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      rimi: this.props.rimiToShow,
    }
  }

  componentDidMount(){
    if(this.props != undefined){
      if(this.props?.match?.params?.id != undefined){
        Firebase.getRimiById(this.props.match.params.id)
        .then(val => {
          this.setState({ rimi: val })
        })
      }
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.rimiToShow !== this.props.rimiToShow){
     this.setState({rimi: this.props.rimiToShow})
    }
  }

  closeModal(){
    this.setState({rimi: null})
  }

  render(){
    return (
      <div className="RimiCard">
        {this.state.rimi &&
          <div className="RimiCard-container">
            <div className="offline screen">
              <div className="offline-1">
                <div>
                  {this.state.rimi.title}
                </div>
                { this.props?.match?.params?.id == undefined &&
                  <div className="buttons-7" onClick={() => this.closeModal()}>
                    <div className="text-50 valign-text-middle poppins-medium-pine-green-20px">
                      <span>
                        <span className="poppins-medium-pine-green-20px">hide</span>
                      </span>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default RimiCard;