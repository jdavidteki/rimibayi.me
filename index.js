import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./src/Redux/Store";
import firebase from "firebase";
import config from './src/firebase/config.js';
import * as serviceWorkerRegistration from "./src/serviceWorkerRegistration.js";
import "./globals.css"
import "./styleguide.css"

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

let app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

ReactDOM.render(app, document.getElementById("root"));

serviceWorkerRegistration.register();

//persistence after page refresh

// https://stackoverflow.com/questions/39097440/on-react-router-how-to-stay-logged-in-state-even-page-refresh