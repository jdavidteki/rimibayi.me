import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Admin from './components/admin/Admin.js'
import Homepage3 from "./components/Homepage";

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
        <Route path="/admin" exact component={Admin} />
        <Route component={ForOFor}/>
      </Switch>
    );
  }
}

//this comment is to trigger a rebuild
export default App;
