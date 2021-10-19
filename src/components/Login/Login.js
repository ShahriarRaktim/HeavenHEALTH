import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
    const {googleSignIn, logIn} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUserEmail=(e)=>{
      setEmail(e.target.value)  
    }
    const handleUserPassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleLogIn=(e)=>{
      logIn(email, password)
      e.preventDefault();
    }
  return (
    <div className="login">
      <div className="login-form">
        <h1>Please Login</h1>
        <form onSubmit={handleLogIn}>
          <div className="input">
            <input type="email" name="" onBlur={handleUserEmail} placeholder="Enter Your Email" />
            <br />
            <input type="password" name="" onBlur={handleUserPassword} placeholder="Enter Your Password"/>
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
