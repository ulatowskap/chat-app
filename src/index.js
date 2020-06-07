import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./login/login";
import DashboardComponent from "./dashboard/dashboard";
import SignupComponent from "./signup/signup";
import mainViewComponent from "./mainView/mainView";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDI6sIQuQZalXyCjc1lQIcwF5iCx-axxkg",
  authDomain: "chat-application-226c2.firebaseapp.com",
  databaseURL: "https://chat-application-226c2.firebaseio.com",
  projectId: "chat-application-226c2",
  storageBucket: "chat-application-226c2.appspot.com",
  messagingSenderId: "837000534481",
  appId: "1:837000534481:web:47e2c357c17866fa50e8f0",
  measurementId: "G-11YTBF6VHQ",
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/" exact component={mainViewComponent}></Route>
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
