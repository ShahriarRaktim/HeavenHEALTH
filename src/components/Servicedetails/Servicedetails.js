import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Servicedetails.css';

const Servicedetails = ({ service }) => {
  return (
    <Card className="my-5 mx-auto card">
      <Card.Img variant="top" src={service?.img} />
      <Card.Body>
        <Card.Title className="name">{service?.name}</Card.Title>
        <Card.Text>{service?.description}</Card.Text>
        <NavLink to="/appointment" className="contact">
          Take an Appointment <i class="fas fa-arrow-alt-circle-right"></i>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default Servicedetails;
