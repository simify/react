import React from "react";
import { Redirect, Route } from "react-router-dom";

const LoggedInRoute = props =>
  localStorage.getItem("jackpotter_user_id") ? (
    <Route {...props}></Route>
  ) : (
    <Redirect to="/login"></Redirect>
  );

export default LoggedInRoute;
