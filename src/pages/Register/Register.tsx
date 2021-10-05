import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../componenets/NavBar/NavBar";
import "./Register.scss";

function Register() {
  return (
    <>
    <NavBar />
    <div className="wrapper">
      <h2 className="text">REGISTER</h2>
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
          type="text"
          name="password"
          placeholder="Enter your password"
          required
        />
            <span className="password">Email</span>
        <input
          className="login-details "
          type="text"
          name="password"
          placeholder="Enter your email"
          required
        />
        <button className="submit">Register Account</button>
      </div>
      <p>
        Already have an account?
        <Link className="reg" to="/login">
          {" "}
          <span className="text">Login</span>
        </Link>
      </p>
    </div>
    </>
  );
}

export default Register;