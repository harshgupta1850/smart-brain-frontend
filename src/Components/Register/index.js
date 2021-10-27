import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { REGISTER_API } from "../common/constant";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onEmailInput = (e) => setEmail(e.target.value);
  const onPasswordInput = (e) => setPassword(e.target.value);
  const onNameInput = (e) => setName(e.target.value);
  const onSubmit = () => {
    axios
      .post(REGISTER_API, {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data.id);
        localStorage.setItem('id',response.data.id)
        history.push("/homepage");
      });
  };

  return (
    <div>
      <h1>Sign In</h1>
      Name : <input type="name" onChange={onNameInput} />
      Email : <input type="email" onChange={onEmailInput} />
      Password : <input type="password" onChange={onPasswordInput} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Register;
