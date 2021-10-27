import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { SIGNIN_API } from "../common/constant";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEmailInput = (e) => setEmail(e.target.value);
  const onPasswordInput = (e) => setPassword(e.target.value);
  const onSubmit = () => {
    console.log(email, password);
    axios
      .post(SIGNIN_API, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("id", response.data.id);
        history.push("/homepage");
      });
  };

  return (
    <div>
      <h1>Sign In</h1>
      Email : <input type="email" onChange={onEmailInput} />
      Password : <input type="password" onChange={onPasswordInput} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default SignIn;
