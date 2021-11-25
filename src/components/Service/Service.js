import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Service = ({ service }) => {
  const { name, summary, img, id } = service;
  return (
    <Col>
      <Card className="m-3 card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="name">{name}</Card.Title>
          <Card.Text>{summary}</Card.Text>
          <NavLink to={`/details/${id}`} className="contact">
            Details <i class="fas fa-arrow-alt-circle-right"></i>
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
