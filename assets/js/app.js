import css from "../css/app.css"

import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

import React from "react";
import ReactDOM from "react-dom";

import Jumbotron from './components/Jumbotron';

ReactDOM.render(<Jumbotron />, document.getElementById("react-app"));
