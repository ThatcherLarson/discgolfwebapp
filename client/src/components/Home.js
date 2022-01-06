import React from "react";
import { Discs } from "../features/discs/Discs";
import Sidebar from "../components/Sidebar";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Home() {

    //TODO: add navigation bar
    let navigate = useNavigate();
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Disc Query</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate("/mybag")}>My Bag</Nav.Link>
                <Nav.Link href="#pricing">Featured Pros</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link href="#logout">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div class="container-fluid no-padding">
          <div class="row">
            <div class="col-3">
              <Sidebar />
            </div>
            <div class="col-9">
              <Discs />
            </div>
          </div>
        </div>
        <p class="pt-5 text-center">Updates coming soon...</p>
      </div>
    );
  }


export default Home;
