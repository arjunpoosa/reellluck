import React, { useState, useEffect, useRef } from "react";
import { Grid, Box } from "@mui/material";
import align1 from "../assets/align1.webp";
import align2 from "../assets/align2.webp";
import styled from "styled-components";
import "./RightSlider.css";
import LogoutIcon from "@mui/icons-material/Logout";
import audioFile from "../assets/main_audio.mp3";

const ToggleSwitch = styled.div`
  position: relative;
  width: 50px;
  height: 20px;
  background-color: ${(props) => (props.isChecked ? "#d3ce1e" : "#E0E0E0")};
  border-radius: 10px;
  box-shadow: 1px 1px 4px cadetblue;
  cursor: pointer;
  transition: background-color 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: ${(props) => (props.isChecked ? "30px" : "0")};
    width: 17px;
    height: 17px;
    background-color: white;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: left 0.3s;
  }
`;

function RightSlider() {
  const [isChecked, setIsChecked] = useState(false);
  const [isImage1Visible, setIsImage1Visible] = useState(true);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const audio = useRef(new Audio(audioFile));

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImage1Visible((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isChecked) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [isChecked]);

  const handleToggle = () => setIsChecked((prev) => !prev);

  const toggleSlider = () => {
    setIsSliderOpen((prev) => !prev);
  };

  return (
    <Grid
      container
      spacing={2}
      style={{
        marginTop: "-6%",
        position: "fixed",
        right: isSliderOpen ? "-88%" : "-96%",
        transition: "right 0.5s",
        height: "150px",
      }}
    >
      <Grid
        item
        xs={0.5}
        style={{
          height: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          marginTop: "60px",
        }}
        onClick={toggleSlider}
      >
        {isImage1Visible ? (
          <img
            src={align1}
            alt="Align1"
            className="breathing-image"
            style={{
              width: "100px",
              height: "80px",
              objectFit: "cover",
              transition: "opacity 0.5s",
              transform: "rotate(90deg)",
            }}
          />
        ) : (
          <img
            src={align2}
            alt="Align2"
            className="breathing-image overlay-image"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              transition: "opacity 0.5s",
              transform: "rotate(90deg)",
            }}
          />
        )}
      </Grid>

      <Grid item xs={2}>
        <Box
          bgcolor="rgba(0, 0, 0, 0.719)"
          display="flex"
          flexDirection="column"
          height="120%"
          width="50%"
          style={{
            border: "2px solid yellow",
            borderRadius: "15px 0px 0px 15px",
          }}
        >
          <Box
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <ToggleSwitch onClick={handleToggle} isChecked={isChecked} />
          </Box>
          <Box
            flex={1}
            color="yellow"
            display="flex"
            alignItems="center"
            marginLeft={2}
            padding={2}
            justifyContent="center"
            borderRadius="50%"
            width="30%"
            marginBottom={2}
            style={{
              background:
                "linear-gradient(-45deg, #ee765291, #fffb00, #23a5d500, #23d5aba2)",
              animation: "blink 1s infinite",
              boxShadow:
                "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
            }}
            className="blink"
          >
            <Grid container>
              <Grid item xs={12}>
                <div>
                  <LogoutIcon
                    style={{ height: "1.2rem" }}
                    className="fa-bounce icon-glow" // Add class for glow effect
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <b
                    style={{
                      fontSize: "0.6rem",
                      color: "yellow",
                      textAlign: "left",
                      marginLeft: "-10px",
                    }}
                    className="text-glow" // Add class for glow effect
                  >
                    LOGOUT
                  </b>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default RightSlider;
