import React from "react";
import { useHistory } from "react-router";

function Root() {
  const history = useHistory();
  const onSignIn = () => history.push("/sign-in");
  const onRegister = () => history.push("/register");

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textDecoration: "underline" }} onClick={onSignIn}>
        Sign In
      </h1>
      <h1 style={{ textDecoration: "underline" }} onClick={onRegister}>
        {" "}
        Register
      </h1>
    </div>
  );
}

export default Root;
