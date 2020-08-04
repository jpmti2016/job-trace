import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.output.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Amplify from "@aws-amplify/core";
import { Auth } from "@aws-amplify/auth";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import awsmobile from "./aws-exports";
Amplify.configure(awsmobile);

ReactDOM.render(
  <React.StrictMode>
    {/* <AmplifyAuthenticator>
      <AmplifySignOut /> */}
    <App />
    {/* </AmplifyAuthenticator> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
