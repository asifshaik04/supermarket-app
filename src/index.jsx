import React from "react";
import ReactDOM from "react-dom";
import "@royalnavy/css-framework/dist/styles.css";
import "./index.css";
// import Cookies from 'js-cookie';
import App from "./app";
// import * as serviceWorker from './serviceWorker';
// import {
//   AUTHORIZATION_COOKIE_NAME,
//   AUTHORIZATION_COOKIE_VALUE,
// } from './constants/authorization';

// TODO : Remove after Azure SSO Integration
// Cookies.set(AUTHORIZATION_COOKIE_NAME, AUTHORIZATION_COOKIE_VALUE);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
