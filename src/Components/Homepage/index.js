import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { USER_DATA_API } from "../common/constant";

function Homepage() {
  const userId = localStorage.getItem("id");
  const history = useHistory();
  useEffect(() => {
    userId
      ? axios
          .get(`${USER_DATA_API}${userId}`)
          .then((response) => console.log(response))
      : history.push("/");
  });
  const onSignOut = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={onSignOut}>Sign Out</button>
    </div>
  );
}

export default Homepage;
