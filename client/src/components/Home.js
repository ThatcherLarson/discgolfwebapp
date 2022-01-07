import React from "react";
import { Discs } from "../features/discs/Discs";
import Sidebar from "../components/Sidebar";
import NavbarComponent from "../components/NavbarComponent";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  
  //TODO: add navigation bar
  let navigate = useNavigate();

  return (
    <div>
      <NavbarComponent />
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
