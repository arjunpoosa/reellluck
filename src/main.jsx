import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./login";
import Games from "./Home/games";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Login /> */}
    <Games />
  </StrictMode>
);
