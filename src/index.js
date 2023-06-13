import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/font/Gilroy-ExtraBold.otf";
import "./assets/font/Gilroy-Light.otf";
import "./assets/font/Metropolis-Bold.otf";
import "./assets/font/Metropolis-Regular.otf";
import "./assets/font/franklin-gothic-medium.ttf";

import "./global.css";

import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
