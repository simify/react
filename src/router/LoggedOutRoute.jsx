import React from "react";
import { Redirect, Route } from "react-router-dom";

const LoggedOutRoute = props =>
  localStorage.getItem("jackpotter_user_id") ? (
    <Redirect to="/dashboard"></Redirect>
  ) : (
    <Route {...props}></Route>
  );

export default LoggedOutRoute;
