import React from "react";
import { useState } from "react";
const LoginForm = () => {
  let success = "Login Successful!";
  let fail = "Login Failed Please Enter the Correct Details";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    let mail = localStorage.getItem("email").replace(/"/g, "");
    let Name = localStorage.getItem("name").replace(/"/g, "");
    alert(name === Name && mail === email ? success : fail);
    setEmail("");
    setName("");
  };
  return (
    <div className="StartSelling_Main_Division">
      <div className="StartSellingLoginForm">
        <div className="StartSellingLoginForm_Box">
          <form onSubmit={handleSubmit}>
            <h2>Login </h2>
            <br />
            <input
              type="email"
              className="StartSellingLoginForm_Email"
              placeholder="Email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <br />
            <input
              type="text"
              id="myInput"
              className="StartSellingLoginForm_Email"
              placeholder="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <br />
            <br />
            <br />
            <br />
            <div className="LoginForm_Submission">
              <button className="Login_FormSubmit">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
