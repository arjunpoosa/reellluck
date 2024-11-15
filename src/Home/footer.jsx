import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import footerbg from "../assets/footeruser.webp";
import footer from "../assets/footerbg.webp";
import userIcon from "../assets/user.webp";
import mailbox from "../assets/mailbox.png";
import star from "../assets/stars.png";
import fbIcon from "../assets/fb.png";
import callender from "../assets/cellander.png";
import comming from "../assets/combabyicon.png";
import heran from "../assets/heran.png";
import coin from "../assets/coins.png";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        position: "fixed",
        bottom: 0,
        left: 0,
        padding: "20px",
      }}
    >
      <Grid container spacing={2} justifyContent="center" overflow={"visible"}>
        <Grid
          item
          xs={4}
          style={{
            backgroundImage: `url(${footerbg})`,
            backgroundSize: "60vh",
            // backgroundPosition: "center",
            padding: "20px",
          }}
        >
          <Typography variant="h6" style={{ marginTop: "-2vh" }}>
            <img
              src={userIcon}
              style={{
                height: "7rem",
                position: "absolute",
              }}
            />
          </Typography>

          <Grid
            container
            direction="column"
            spacing={2}
            sx={{
              marginTop: "px",
            }}
          >
            <p
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              {" "}
              Test3
            </p>
            {[
              { text: "Balance", icon: heran, value: "SC 429.39" },
              { text: "Winning", icon: coin, value: "410" },
            ].map((item, index) => (
              <Grid
                item
                xs={12}
                key={index}
                container
                display={"absalute"}
                justifyContent={"end"}
              >
                <Grid
                  container
                  style={{
                    border: "3px solid hsl(37.55deg 73.13% 39.41%)",
                    width: "66%",
                    background: "hsl(23.16deg 100% 11.18%)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "31px",
                    left: "100px",
                  }}
                >
                  <Grid item xs={4} paddingLeft={2}>
                    <Typography variant="body2" style={{ color: "#fff" }}>
                      {item.text}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} paddingLeft={3}>
                    <img src={item.icon} height={"10px"} />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body2" style={{ color: "#fff" }}>
                      {item.value}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={8}
          style={{
            backgroundImage: `url(${footer})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "20px",
            overflow: "visible",
          }}
        >
          <Grid container spacing={2}>
            {[
              { img: mailbox },
              { img: star },
              { img: fbIcon },
              { img: callender },
              { img: comming },
            ].map((item, index) => (
              <Grid item xs={2.4} key={index} style={{ position: "relative" }}>
                <img
                  src={item.img}
                  style={{
                    height: "90px",
                    marginBottom: "30px",
                    zIndex: 10,
                    position: "relative", // Ensure relative positioning
                    top: index === 4 ? "-20px" : "-20px", // Adjust for the last icon to avoid overflow
                    ...(index === 0 && { transform: "rotate(270deg)" }),
                    ...(index === 3 && { transform: "rotate(270deg)" }),
                    // height: index === 4 ? "100px" : "90px",
                  }}
                  alt={`icon-${index}`}
                />
                {index < 4 && (
                  <Typography
                    variant="caption"
                    style={{
                      position: "absolute",
                      bottom: -10,
                      left: "50%",
                      transform: "translateX(-50%)",
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      padding: "2px 5px",
                      borderRadius: "5px",
                      zIndex: 20,
                    }}
                  ></Typography>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
