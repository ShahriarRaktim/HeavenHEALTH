import React, { useEffect, useState } from "react";
import "./Services.css";
import service from "../../image/service.jpg";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("allservices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="main-services">
        <div className="service-banar">
          <h1>
            <span>HERE</span> The best services that we provided
          </h1>
        </div>
        <img src={service} alt="" />
      </div>
      <section>
        <div className="services">
          <h1>Medical Service</h1>
          <h2>HeavenHEALTH Services</h2>
          <p>
            As you continue to keep tabs on the HeavenHEALTH industry, don’t
            forget passion you’ve been feeling to propel your career forward.
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4 p-0">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Services;
