import React from "react";
import { Link } from "react-router-dom";


import "./Login.scss";

function Login() {
 
  return (
    <div className="wrapper">
      <h2 className="text">LOGIN</h2>
      <p className="text">
        Kindly login into your account
      </p>
      <div className="form1">
        <span>Username</span>
        <input
          className="login-details"
          type="text"
          name="username"
          placeholder="Enter your username"
          required
        />

        <span className="password">Password</span>
        <input
          className="login-details "
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <button className="submit">Submit</button>
      </div>
      <p>
        Don't have account?
        <Link className="reg" to="/register">
          {" "}
          <span className="text">Register</span>
        </Link>
      </p>
    </div>
  );
}

export default Login