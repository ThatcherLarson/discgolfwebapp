import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function NavbarComponent() {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login")
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate("/home")}>
            Disc Query
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/mybag")}>My Bag</Nav.Link>
              <Nav.Link href="#pricing">Featured Pros</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={() => navigate("/profile")}>Profile</Nav.Link>
              <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
