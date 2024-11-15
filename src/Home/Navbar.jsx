import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import navbg from "../assets/navbar.webp";
import nav1 from "../assets/navtag1.webp";
import nav2 from "../assets/navtag2.webp";
import nav3 from "../assets/navtag3.webp";
import nav4 from "../assets/navtag4.webp";

function Navbar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        backgroundImage: `url(${navbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: isSmallScreen ? "60px" : "40px",
        padding: "0 20px",
      }}
      className="navbar"
    >
      <Toolbar>
        <Grid
          container
          spacing={isSmallScreen || isMediumScreen ? 1 : 2}
          justifyContent="center"
        >
          {[
            { img: nav1, text: "$1,005.91", color: "red" },
            { img: nav2, text: "$104.99", color: "#ff00dd" },
            { img: nav3, text: "$29.66", color: "greenyellow" },
            { img: nav4, text: "$6.17", color: "rgb(11, 175, 224)" },
          ].map((item, index) => (
            <Grid item xs={6} sm={3} md={2} key={index}>
              <Box
                sx={{
                  position: "relative",
                  flexGrow: 0.5,
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: isSmallScreen || isMediumScreen ? "35px" : "30px",
                  fontSize: isSmallScreen || isMediumScreen ? "10px" : "15px",
                  display: "flex",
                  alignItems: "flex-start",
                  color: item.color,
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
                  padding: "0",
                  marginTop:
                    isSmallScreen || isMediumScreen ? "-20px" : "-30px",
                }}
              >
                <Typography
                  variant="body2"
                  component="b"
                  sx={{
                    position: "absolute",
                    left: isSmallScreen || isMediumScreen ? "50%" : "50%",
                    top: 7,
                    transform:
                      isSmallScreen || isMediumScreen
                        ? "translateX(-50%)"
                        : "0",
                  }}
                >
                  <b> {item.text} </b>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
