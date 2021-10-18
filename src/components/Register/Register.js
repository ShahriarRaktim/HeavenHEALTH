import React from 'react';
import './Register.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {googleSignIn} = useAuth();
    return (
      <div className="register">
        <div className="login-form">
          <h1>Please Register</h1>
          <form action="">
            <div className="input">
              <input type="email" name="" id="" placeholder="Enter Your Email" />
              <br />
              <input type="password" name="" id="" placeholder="Enter Your Password"/>
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