import React from "react";
import { Switch } from "react-router-dom";
import LoggedOutRoute from "./LoggedOutRoute";
import LoggedInRoute from "./LoggedInRoute";

function Content() {
  return (
    <Switch>
      <LoggedOutRoute path="/login">
        <h1>Login Form Content Area</h1>
      </LoggedOutRoute>
      <LoggedInRoute path="/dashboard">
        <h1>Dashboard Content Area</h1>
      </LoggedInRoute>
      <LoggedInRoute path="/" exact>
        <h1>Home Content Area</h1>
      </LoggedInRoute>
    </Switch>
  );
}

export default Content;
