import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';

import "./ForOFor.css"

class ConnectedForOFor extends Component {
    state = {

    };

    componentDidMount(){
        var mainContainer=document.getElementById("ForOFor");
        setInterval(createStar,100);

        function createStar(){
            var right=Math.random()*500;
            var top=Math.random()*screen.height;
            var star=document.createElement("div");

            star.classList.add("star")
            mainContainer.appendChild(star);
            setInterval(runStar,10);
            star.style.top=top+"px";

            function runStar(){

                if(right>=screen.width){
                    star.remove();
                }

                right+=3;
                star.style.right=right+"px";
            }
        }
    }

    render() {
        return (
            <div className="ForOFor" id="ForOFor">
                <MetaTags>
                    <title>rimibayi - play with africa! 404</title>
                    <meta name="description" content="sing along to your favourite afro beat songs" />
                    <meta property="og:title" content="rimibayi" />
                    <meta http-equiv='cache-control' content='no-cache' />
                    <meta http-equiv='expires' content='0' />
                    <meta http-equiv='pragma' content='no-cache' />
                </MetaTags>

                <div className="text">
                    <div>
                        ERROR
                    </div>
                    <h1>404</h1>
                    <div>Page Not Found</div>
                </div>

                <div className="astronaut">
                    <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" className="src" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

const ForOFor = withRouter(connect(mapStateToProps)(ConnectedForOFor));
export default ForOFor;


//https://material-ui.com/components/material-icons/#material-icons