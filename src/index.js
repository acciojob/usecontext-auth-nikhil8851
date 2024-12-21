import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import RoboProvider from "./context/RoboProvider";



ReactDOM.render(
   <RoboProvider>
            <App />
 </RoboProvider>
, document.getElementById("root"));
