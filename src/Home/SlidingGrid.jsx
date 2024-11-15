import React, { useEffect, useState } from "react";
import { Grid, Button } from "@mui/material";
import axios from "axios";
import arrow from "../assets/arrow.webp";
import allbg from "../assets/allbg.webp";
import bg from "../assets/2bg.webp";
import bonusbg from "../assets/bunosbutton.webp";
import alltag from "../assets/alltag.webp";
import allonchange from "../assets/allonchange.webp";
import All from "../assets/All.webp";
import Allon from "../assets/all-imgonchange.webp";
import favorite from "../assets/favorite.webp";
import favonchange from "../assets/favoritchangertext.webp";
import like from "../assets/heart2.webp";
import hearton from "../assets/heartonchange.webp";
import slot from "../assets/slot.webp";
import slotonchange from "../assets/slotonchange.webp";
import roll from "../assets/roll.webp";
import rollchange from "../assets/rollchanger.webp";
import Fishtext from "../assets/fishtext.webp";
import ftext from "../assets/fishtextonchange.webp";
import Fishimg from "../assets/fishchanger.webp";
import fishchange from "../assets/fishchanger.webp";
import kimg from "../assets/kimg.webp";
import kon from "../assets/otherlogochange.webp";
import other from "../assets/othertext.webp";
import othertext from "../assets/otherchanger.webp";
import yourbonus from "../assets/bonustext.webp";
import dollertext from "../assets/dolllartext.webp";
import shine from "../assets/shingeffect.webp"; // add shine image

import "./SlidingGrid.css";

const buttonData = [
  {
    bgImage: bg,
    startIcon: allonchange,
    endIcon: Allon,
    altStart: "All Tag",
    altEnd: "All",
    onChangeIcon: alltag,
    onendIcon: All,
    bgonchange: allbg,
  },
  {
    bgImage: bg,
    startIcon: favorite,
    endIcon: like,
    altStart: "Favorite",
    altEnd: "Like",
    onChangeIcon: favonchange,
    onendIcon: hearton,
    bgonchange: allbg,
  },
  {
    bgImage: bg,
    startIcon: slot,
    endIcon: roll,
    altStart: "Slot",
    altEnd: "Roll",
    onChangeIcon: slotonchange,
    onendIcon: rollchange,
    bgonchange: allbg,
  },
  {
    bgImage: bg,
    startIcon: Fishtext,
    endIcon: Fishimg,
    altStart: "Fish Text",
    altEnd: "Fish Image",
    onChangeIcon: ftext,
    onendIcon: fishchange,
    bgonchange: allbg,
  },
  {
    bgImage: bg,
    startIcon: other,
    endIcon: kimg,
    altStart: "Other Text",
    altEnd: "K Image",
    onChangeIcon: othertext,
    onendIcon: kon,
    bgonchange: allbg,
  },
  {
    bgImage: bonusbg,
    startIcon: yourbonus,
    endIcon: dollertext,
    altStart: "Your Bonus",
    altEnd: "Dollar Text",
    isDisabled: true,
  },
];

function SlidingGrid() {
  const [isOpen, setIsOpen] = useState(true);
  const [isRotated, setIsRotated] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    axios
      .get("https://dragonreel.blocmatrix.com/api/category")
      .then((res) => {
        const id = res.data.data.map((item) => item._id);
        const name = res.data.data.map((item) => item.name);

        console.log(id, name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  const handleButtonClick = (index) => {
    setSelectedButton(index !== selectedButton ? index : null);
  };

  const slideStyle = {
    transform: isOpen ? "translate(-130%, 0)" : "translate(-30%, 0)",
    transition: "transform 0.3s ease-in-out",

    zIndex: 10,
    overflow: "visible",
  };

  const arrowSlideStyle = {
    transform: isOpen ? "translate(-50%,0)" : "translate(50%, 0)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
    zIndex: 10,
  };

  const rotationStyle = {
    transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.1s",
  };

  return (
    <Grid container spacing={12}>
      <Grid item xs={1.5} style={slideStyle}>
        <Grid container spacing={1}>
          {buttonData.map((button, index) => (
            <Grid item xs={12} key={index} style={{ position: "relative" }}>
              <Button
                variant="h6"
                disabled={button.isDisabled && selectedButton !== null}
                onClick={() => handleButtonClick(index)}
                style={{
                  display: "flex",
                  width: "25vh",
                  backgroundImage: `url(${
                    selectedButton === index
                      ? button.bgonchange
                      : button.bgImage
                  })`,
                  backgroundSize: "cover",
                  justifyContent: "space-evenly",
                  height: "60px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {selectedButton === index && (
                  <img
                    src={shine}
                    alt="Shine Effect"
                    className="shine-effect"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      objectFit: "cover",
                      width: "100%",
                      transform: "translate(-50%, -50%) rotate(55deg)",
                      opacity: 0.9,
                      filter: "brightness(151%)",
                      animationName: "shine",

                      animationDuration: "2s",
                      animationTimingFunction: "ease-in-out",
                      animationDelay: "0s",
                      animationIterationCount: "infinite",
                      animationDirection: "normal",
                      animationfillMode: "none",
                      animationPlayState: "running",
                      animationName: "run",
                      animationTimeline: "auto",
                    }}
                  />
                )}
                <img
                  src={
                    selectedButton === index
                      ? button.onChangeIcon
                      : button.startIcon
                  }
                  alt={button.altStart}
                  style={{ height: "5vh", width: "10vh" }}
                />
                <img
                  src={
                    selectedButton === index ? button.onendIcon : button.endIcon
                  }
                  alt={button.altEnd}
                  style={{
                    marginLeft: "20px",
                    height: index === buttonData.length - 1 ? "4vh" : "10vh",
                    width: index === buttonData.length - 1 ? "5vh" : "10vh",
                  }}
                />
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        xs={2}
        onClick={toggleSlider}
        style={{ paddingTop: "100%", ...arrowSlideStyle }}
      >
        <img src={arrow} alt="Arrow" style={{ ...rotationStyle }} />
      </Grid>
    </Grid>
  );
}

export default SlidingGrid;
