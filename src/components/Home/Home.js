import React from "react";
import { NavLink } from "react-router-dom";
import banar from '../../image/banar.jpg'
import './Home.css'

const Home = () => {
  return (
    <>
      <section className="banar">
        <h1><span>BEST</span> Medical & Healthcare Service For Your Family</h1>
        <NavLink to="/ourdoctors" className="click">About Us <i class="fas fa-arrow-alt-circle-right"></i></NavLink>
      </section>
    </>
  );
};

export default Home;
