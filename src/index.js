import React from "react";
import ReactDOM from "react-dom";
import "./Component/CSS/styles.css";
import App from "./Component/App";
import "./Component/CSS/bootstrap.css";
import "./Component/CSS/footerScript";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <App />,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
