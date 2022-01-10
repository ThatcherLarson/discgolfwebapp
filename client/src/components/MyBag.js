import React from "react";
import { Card, Form, Button, Stack } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavbarComponent from "./NavbarComponent";

function MyBag() {
  let navigate = useNavigate();

  //TODO: Add "in my bag" logic for user
  return (
    <div>
      <NavbarComponent/>
      temp page to show discs in your bag
    </div>
  );
}

export default MyBag;
