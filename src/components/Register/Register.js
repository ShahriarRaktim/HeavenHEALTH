import React, { useState } from 'react';
import './Register.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {googleSignIn, register} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUserEmail=(e)=>{
      setEmail(e.target.value)  
    }
    
    const handleUserPassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleCreateAccount=(e)=>{
     register(email, password)
      e.preventDefault();
    }

    return (
      <div className="register">
        <div className="login-form">
          <h1>Please Register</h1>
          <form onSubmit={handleCreateAccount}>
            <div className="input">
              <input type="email" name="" onBlur={handleUserEmail} placeholder="Enter Your Email" />
              <br />
              <input type="password" name="" onBlur={handleUserPassword} placeholder="Enter Your Password"/>
            </div>
  
            <input className="login-btn" type="submit" value="Register" />
          </form>
          <h6>Or Register With</h6>
          <button onClick={googleSignIn} className="login-btn">Google</button>
          <br />
          <p>
            Already have an account?
            <NavLink className="login-btn" to="/login">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    );
};

export default Register;