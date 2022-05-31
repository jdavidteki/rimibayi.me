import React, { Component } from "react";

import "./LeftRightMovement.css";

class LeftRightMovement extends Component{
  constructor(props){
    super(props);
        this.state = {
            rimis: Object.values(this.props.rimis),
            rimisIds: [],
            rowOneRimis: [],
            rowTwoRimis: [],
            rowThreeRimis: [],
        }
    }

    componentDidMount(){
        this.showRows()
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.filteredRimis !== this.props.filteredRimis
            && this.props.filteredRimis.length > 0)
        {
            this.setState({
                rowOneRimis: [],
                rowTwoRimis: [],
                rowThreeRimis: [],
                rimis: this.props.filteredRimis
            })
        }
    }

    showRows = () => {
        let index = 0

        const thisInterval = setInterval(() => {
            let randomRimiIndex = Math.floor(Math.random() * (this.state.rimis.length - 0) + 0);

            if (index < 400){
                this.setState({
                    rowOneRimis: [...this.state.rowOneRimis, this.state.rimis[randomRimiIndex]]
                })

                randomRimiIndex = Math.floor(Math.random() * (this.state.rimis.length - 0) + 0);
                this.setState({
                    rowTwoRimis: [...this.state.rowTwoRimis, this.state.rimis[randomRimiIndex]]
                })

                randomRimiIndex = Math.floor(Math.random() * (this.state.rimis.length - 0) + 0);
                this.setState({
                    rowThreeRimis: [...this.state.rowThreeRimis, this.state.rimis[randomRimiIndex]]
                })

                index++
            }else{
                clearInterval(thisInterval)
            }
        }, 500)
    }

    render(){
        return (
            <div className="LeftRightMovement">
                <div className="LeftRightMovement-firstRow rimi-first">
                    {this.state.rowOneRimis.map((rimi, index) => <div className="LeftRightMovement-eachRimi bottomFadeOutCurrentLine" key={index} onClick={() =>this.props.showRimiCard(rimi)}>{rimi.title}</div>)}
                </div>
                <div className="LeftRightMovement-secRow">
                    {this.state.rowTwoRimis.map((rimi, index) => <div className="LeftRightMovement-eachRimi bottomFadeOutCurrentLine" key={index} onClick={() =>this.props.showRimiCard(rimi)}>{rimi.title}</div>)}
                </div>
                <div className="LeftRightMovement-thirdRow">
                    {this.state.rowThreeRimis.map((rimi, index) => <div className="LeftRightMovement-eachRimi bottomFadeOutCurrentLine" key={index} onClick={() =>this.props.showRimiCard(rimi)}>{rimi.title}</div>)}
                </div>
            </div>
        );
    }
}

export default LeftRightMovement;
