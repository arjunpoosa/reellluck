import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Grid, Typography, Box } from "@mui/material";
import arrow from "../assets/arrow.webp";
import fbig from "../assets/Fb&ig.webp";
import linebar from "../assets/linebar.webp";
import Hot from "../assets/label.webp";
import heart from "../assets/heart.webp";
import Flame from "../assets/flame.gif";
import redheart from "../assets/hurtcganger.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlidingGrid from "./SlidingGrid";
import RightSlider from "./RightSlider";

function Hero() {
  const [images, setImages] = useState([]);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dragonreel.blocmatrix.com/api/game?limit=50")
      .then((response) => {
        const imageUrls = response.data.data.map((item) => item.imageUrl);
        setImages(imageUrls);
        setHearts(new Array(imageUrls.length).fill(false));
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const toggleHeart = (index) => {
    const updatedHearts = [...hearts];
    updatedHearts[index] = !updatedHearts[index];
    setHearts(updatedHearts);
  };

  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{ breakpoint: 780, settings: { slidesToShow: 1 } }],
  };

  const rowStyles = {
    height: "20px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  const imageStyles = {
    width: "100px",
    height: "100px",
    border: "3px solid white",
    position: "absolute",
    top: "50%",
    // transform: "translateY(-50%)",
  };

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      style={{
        position: "absolute",
        padding: "px",
        top: "100px",
      }}
    >
      <Grid
        item
        xs={1.5}
        padding={0}
        zIndex={10}
        overflow={"visible"}
        style={{
          // border: "2px solid white",
          paddingTop: "6vh",
          height: "",
        }}
      >
        <SlidingGrid />
      </Grid>

      <Grid item xs={2}>
        <Typography>
          <img
            src={fbig}
            style={{ height: "350px" }}
            alt="Facebook & Instagram"
          />
        </Typography>
      </Grid>
      <Grid
        item
        xs={0.5}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h6">
          <img src={linebar} style={{ height: "350px" }} alt="Line Bar" />
        </Typography>
      </Grid>

      <Grid item xs={7} style={{ overflow: "auto" }} marginBottom={""}>
        <Slider {...settings}>
          {Array.from({ length: Math.ceil(images.length / 6) }).map(
            (_, slideIndex) => (
              <div key={slideIndex}>
                <Grid container spacing={2}>
                  {Array.from({ length: 6 }).map((_, cardIndex) => {
                    const imageIndex = slideIndex * 6 + cardIndex;

                    if (imageIndex >= images.length) return null;

                    return (
                      <Grid
                        item
                        xs={4}
                        key={cardIndex}
                        sx={{ paddingBottom: 2 }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            width: "180px",
                            height: "180px",
                            marginTop: "10%",

                            backgroundImage: `url(${images[imageIndex]})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            border: "4px solid gold",
                            borderRadius: "20px",
                          }}
                        >
                          <img
                            src={Hot}
                            alt="Hot Label"
                            style={{
                              position: "absolute",
                              left: "-20px",
                              top: -10,
                              zIndex: 10,
                            }}
                          />
                          <img
                            src={Flame}
                            alt="Flame"
                            style={{
                              position: "absolute",
                              left: 0,
                              top: "-100px",
                              height: "120px",
                              zIndex: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              position: "absolute",
                              top: "145px",
                              left: "-2px",
                              zIndex: 10,
                            }}
                          >
                            <button
                              onClick={() => toggleHeart(imageIndex)}
                              style={{ border: "none", background: "none" }}
                            >
                              <img
                                src={hearts[imageIndex] ? redheart : heart}
                                style={{ height: "35px" }}
                              />
                            </button>
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            )
          )}
        </Slider>
      </Grid>
      <Grid
        item
        xs={0.5}
        style={{
          paddingTop: "200px",
        }}
      >
        <RightSlider />
      </Grid>
    </Grid>
  );
}

export default Hero;
