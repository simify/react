import React from "react";
import { Button } from "react-onsenui";
import { withRouter } from "react-router-dom";

const LoginState = ({ history }) => {
  const userId = localStorage.getItem("jackpotter_user_id");

  return userId ? (
    <>
      <div>Logged in with ID: {userId}</div>
      <Button
        onClick={() => {
          localStorage.removeItem("jackpotter_user_id");
          history.push("/login");
        }}
      >
        Logout
      </Button>
    </>
  ) : (
    <Button
      onClick={() => {
        localStorage.setItem("jackpotter_user_id", 1);
        history.push("/dashboard");
      }}
    >
      Click to log in
    </Button>
  );
};

export default withRouter(LoginState);
