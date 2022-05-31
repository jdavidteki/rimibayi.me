import React, { Component } from "react";
import Firebase from "../../firebase/firebase.js";
import LeftRightMovement from "../LeftRightMovement/LeftRightMovement"
import Searcher  from "../Searcher/Searcher.js";
import RimiCard from "../RimiCard/RimiCard.js"

import "./Homepage3.css";

class Homepage3 extends Component{
  constructor(props){
    super(props);

    this.state = {
      rimis: [],
      rimisIds: [],
      filteredRimis: [],
      rimiToShow: null,
    }
  }

  componentDidMount(){
    Firebase.getAllRimis().then(
      val => {
        this.setState({
          rimis: val,
          rimisIds: val.map(a => a.id),
        })
      }
    )
  }

  showRimiCard = (rimi) => {
    this.setState({rimiToShow: rimi})
  }

  getSearchResult = (rimis) => {
    this.setState({filteredRimis: rimis})
  }

  render(){
    if(this.state.rimis.length > 0){
      return (
        <div className="container-center-horizontal">
          <div className="Homepage screen">
            <div className="homePage-background">
              <LeftRightMovement rimis={this.state.rimis} filteredRimis={this.state.filteredRimis} showRimiCard={this.showRimiCard}/>
            </div>
            <div className="HomePage-searcher">
              <Searcher rimis={this.state.rimis} getSearchResult={this.getSearchResult} />
            </div>
            <div className="HomePage-rimiCard">
              <RimiCard rimiToShow={this.state.rimiToShow} />
            </div>
          </div>
        </div>
      );
    }else{
      return (
        <div></div>
      )
    }
  }
}

export default Homepage3;
