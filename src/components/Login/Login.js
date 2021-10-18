import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
    const {googleSignIn} = useAuth();
  return (
    <div className="login">
      <div className="login-form">
        <h1>Please Login</h1>
        <form action="">
          <div className="input">
            <input type="email" name="" id="" placeholder="Enter Your Email" />
            <br />
            <input type="password" name="" id="" placeholder="Enter Your Password"/>
          </div>

          <input className="login-btn" type="submit" value="Login" />
        </form>
        <h6>Or Login With</h6>
        <button onClick={googleSignIn} className="login-btn">Google</button>
        <br />
        <p>
          Don't have account?{" "}
          <NavLink className="login-btn" to="/register">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
