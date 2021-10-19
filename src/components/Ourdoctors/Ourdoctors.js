import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";
import doctor from "../../image/details.jpg"
import "./Ourdoctors.css"

const Ourdoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
        <img className="w-50" src={doctor} alt="" />
        <div className="doctors">
            <h1>HeavenHEALTH Doctors</h1>
        <h2>Some of our BEST Doctors</h2>
        <p>As you continue to keep tabs on the HeavenHEALTH industry</p>
        </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {doctors.map((doctor) => (
          <Doctor doctor={doctor}></Doctor>
        ))}
      </Row>
    </div>
  );
};

export default Ourdoctors;
