import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage3 from "./components/Homepage";
import RimiCard from "./components/RimiCard/RimiCard.js";
import CreateRimi from "./components/CreateRimi/CreateRimi.js"

import "./App.css";

window.onresize = function() {
  document.getElementsByClassName("App").height = window.innerHeight;
}
window.onresize();

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Homepage3} />
        <Route path="/rimibayi" exact component={Homepage3} />
        <Route path="/rimicard/:id" component={RimiCard} />
        <Route path="/createrimi" component={CreateRimi} />
      </Switch>
    );
  }
}

//this comment is to trigger a rebuild
export default App;
