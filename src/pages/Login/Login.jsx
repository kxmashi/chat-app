import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";

<<<<<<< HEAD
const Login = () => {
>>>>>>> c1dbdcdbebce8d27bbb08030a8f2d7035659870d
  const [currState, setCurrState] = useState("Sign up");

  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form action="" className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign up" ? (
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            autoFocus
            required
          />
        ) : null}
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
        <button type="submit">
          {currState === "Sign up" ? "Create Account" : "Login"}
        </button>
        <div className="login-term">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <p>Agree to the terms of user & privacy policy</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign up" ? (
            <p className="login-toggle">
              Already have an account{" "}
              <span onClick={() => setCurrState("Login")}> Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurrState("Sign up")}> Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
