// Games.js
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./footer";
import SlidingGrid from "./SlidingGrid";
import RightSlider from "./RightSlider";
import "./games.css";
import Rotation from "./Rotation";

function Games() {
  return (
    <div className="games-container mainpage">
      <Navbar />
      <Hero />
      <Footer />
      <Rotation />
      {/* <h1>hello</h1> */}
      {/* <SlidingGrid /> */}
      {/* <RightSlider /> */}
    </div>
  );
}

export default Games;
