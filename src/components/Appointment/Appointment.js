import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import pic from "../../image/appoinment.jpg";

const Appointment = () => {
  const { user } = useAuth();
  const [final, setFinal] = useState(false);

  const handleSubmit = () => {
    setFinal(true);
  };
  return (
    <div>
      <img className="w-50 pt-5" src={pic} alt="" />
      <div className="login-form">
        {!final ? (
          <>
            <h1>Your Appointment </h1>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input
                  type="text"
                  defaultValue={user.displayName}
                  placeholder="Your Name"
                  required
                />
                <input type="text" placeholder="Your Doctor Name" />
                <input
                  className="pb-5"
                  type="text"
                  placeholder="Your Problem"
                  required
                />
                <input type="email" name="" id="" defaultValue={user.email} />
                <input type="number" name="" id="" placeholder="Phone Number" required />
              </div>
              <input className="login-btn px-4" type="submit" value="Submit" />
            </form>
          </>
        ) : (
          <>
            <h1 className="mb-5">Thank You for Taking an Appointment!</h1>
            <NavLink to="/home" className="about">
              Back Home <i class="fas fa-arrow-alt-circle-right"></i>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Appointment;
