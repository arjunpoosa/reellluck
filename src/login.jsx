import React from "react";
import "./login.css";

import {
  Grid,
  Button,
  Checkbox,
  Typography,
  TextField,
  FormControlLabel,
} from "@mui/material";
import mobile from "./assets/mobile.webp";
import password from "./assets/password.webp";
import ok from "./assets/ok.webp";

function Login() {
  return (
    <div className="loginpage">
      <Grid
        container
        spacing={2}
        className="login"
        sx={{
          maxWidth: "550px",
          backgroundColor: "rgba(0, 0, 0, 0.719)",
          padding: "10px",
          borderRadius: "8px",
          width: "100%",
        }}
      >
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Typography variant="body2">
            <img
              src={mobile}
              alt="mobile id"
              style={{
                height: "45px",
                display: "inherit",
                justifyContent: "center",
              }}
            />
          </Typography>
          <Typography variant="body2" style={{}}>
            <img
              src={password}
              alt="password"
              style={{
                height: "45px",
                display: "inherit",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            />
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <TextField
            variant="outlined"
            placeholder="Mobile ID"
            size="small"
            fullWidth
            aria-label="Mobile ID"
            InputProps={{
              style: {
                boxShadow:
                  "inset -2px -1px 1px #485694, inset 1px 1px 1px #000000c5",
                backgroundColor: "hwb(0 0% 95% / 0.525)",
                borderRadius: "4px",
                fontSize: "10px",
                color: "white",
                padding: "3px 2px",
              },
            }}
          />
          <TextField
            variant="outlined"
            placeholder="Default in Your Pin"
            type="password"
            size="small"
            fullWidth
            aria-label="PIN"
            sx={{ marginTop: "10px" }}
            InputProps={{
              style: {
                boxShadow:
                  "inset -2px -1px 1px #485694, inset 1px 1px 1px #000000c5",
                backgroundColor: "hwb(0 0% 95% / 0.525)",
                borderRadius: "4px",
                fontSize: "10px",
                color: "white",
                padding: "3px 2px",
              },
            }}
          />
        </Grid>

        <Grid item xs={4} style={{ textAlign: "center" }}>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={
              <Typography fontSize="0.75rem" color="white">
                Remember me
              </Typography>
            }
          />

          <Button
            variant="contained"
            color="none"
            size="small"
            aria-label="Submit login"
            sx={{
              minWidth: "auto",
              padding: "4px 8px",
              marginTop: "10px",
            }}
          >
            <img src={ok} alt="Submit" style={{ height: "30px" }} />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
