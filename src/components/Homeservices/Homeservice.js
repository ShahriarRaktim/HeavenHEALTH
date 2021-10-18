import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Homeservice = ({service}) => {
    const {name, summary, img} = service;
    return (
        <Col>
        <Card className="m-3">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {summary}
            </Card.Text>
            <NavLink to="/contact" className="contact">
            Contact Us <i class="fas fa-arrow-alt-circle-right"></i>
          </NavLink>
          </Card.Body>
          
        </Card>
      </Col>
    );
};

export default Homeservice;