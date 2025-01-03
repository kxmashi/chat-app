import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";

const login = () => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form action="" className="login-form">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          className="form-input"
          autoFocus
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          required
        />
        <button type="submit">Sign Up</button>
        <div className="login-term">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <p>Agree to the terms of user & privacy policy</p>
        </div>
        <div className="login-forgot">
          <p className="login-toggle">
            Already have an account{" "}
            <span onClick={() => setCurrState("Login")}> click here</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default login;
