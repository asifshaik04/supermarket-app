import React from "react";
import ReviewOrders from "./ReviewOrders";
import { PhaseBanner } from "@royalnavy/react-component-library";
import logo from "../logo.JPG"; // Tell webpack this JS file uses this image
import "./indexStyles.css";
// import "./myStyles.css";

const App = () => {
  return (
    <>
      <img src={logo} alt="Logo" />
      <PhaseBanner />
      <ReviewOrders />
    </>
  );
};

export default App;
