import React from "react";
import { NavLink } from "react-router-dom";
import banar from "../../image/banar.jpg";
import docTeam from "../../image/doc-team.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="banar">
        <h1>
          <span>BEST</span> Medical & Healthcare Service For Your Family
        </h1>
        <NavLink to="/ourdoctors" className="click">
          About Us <i class="fas fa-arrow-alt-circle-right"></i>
        </NavLink>
      </section>
      <section className="doc-team">
        <div>
          <img src={docTeam} alt="" />
        </div>
        <div className="information">
          <h1>HeavenHEALTH</h1>
          <h2>We Provide Essential Services For Your Health Care</h2>
          <p>
            We treatment in a simple way so that you all can understand a
            particular illness or disease in a better way, get treated in a
            proper way by consulting your family healthcare physician.
          </p>
          <div>
            <div className="info">
              <h3>
                <i class="fas fa-briefcase-medical"></i>
              </h3>
              <div>
                <h4>Quality of Care Services</h4>
                <p>
                  Human compassion can be a profession. PSU’s 14 pre-health
                  tracks show you how.
                </p>
              </div>
            </div>

            <div className="info">
              <h3>
                <i class="fas fa-hand-holding-medical"></i>
              </h3>
              <div>
                <h4>Standards of Treatment</h4>
                <p>
                  Become a next-generation leader. Earn your Master's in Public
                  Service Leadership
                </p>
              </div>
            </div>

            <div className="info">
              <h3>
                <i class="fas fa-clock"></i>
              </h3>

              <div>
                <h4>24/7 Working Time</h4>
                <p>
                  Time is the continued sequence of existence and events that
                  occurs in an apparently irreversible succession from the past,
                  through the present
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
