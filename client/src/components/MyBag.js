import React from "react";
import Register from "./Register";
import Home from "./Home";
import { Card, Form, Button, Stack } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function MyBag() {
  let navigate = useNavigate();

  //TODO: Add "in my bag" logic for user
  return (
    <div>
      temp page to show discs in your bag
    </div>
  );
}

export default MyBag;
