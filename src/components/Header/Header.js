import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/home" style={{ color: "aqua" }}>
            HeavenHEALTH
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home" className="text-white">
                HOME
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services" className="text-white">
                SERVICES
              </Nav.Link>
              <NavDropdown title="PAGES" id="navbarScrollingDropdown">
                <NavDropdown.Item as={NavLink} to="/ourdoctors" className="text-dark">OUR DOCTORS</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/appointment" className="text-dark">APPOINTMENT</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/help" className="text-dark">HELP & FAQ </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/contact" className="text-white">
                CONTACT
              </Nav.Link>
            </Nav>
            <Nav>
                <img src="" alt="" />
              <Nav.Link href="#user" className="text-info">More deets</Nav.Link>
              <Nav.Link as={NavLink} to="/login" className="text-info">
                LOGIN
              </Nav.Link>
              <Nav.Link as={NavLink} to="/logout" className="text-info">
                LOGOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
