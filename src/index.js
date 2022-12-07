import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";

import './index.css'
import "./font/MonumentExtended-Regular.otf"
import "./font/MonumentExtended-Ultrabold.otf"
import "./font/Gilroy-Medium.ttf"



ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
