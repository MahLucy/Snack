import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import GlobalStateProvider from "./hooks/globalState";

import "./global.scss";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <Routes />
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
