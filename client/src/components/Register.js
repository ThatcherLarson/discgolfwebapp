import React from "react";
import Login from "./Login";
import { Card, Form, Button, Stack } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Register() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [pass, setPass] = useState();

  let navigate = useNavigate();

  const handleRegister = async () => {
    try {
      //register user
      const body = { email, name, pass };
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log(data[0].user_id);
        createBag(data[0].user_id);
      }

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  //TODO: test this function
  const createBag = async (id) => {
    try {
      const body = { id };
      const response = await fetch("http://localhost:5000/bags", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Card>
        <Card.Body>
          <Card.Title style={{ fontSize: "36px" }} className="text-center">
            <strong>Register</strong>
          </Card.Title>
          <Form>
            <Form.Group
              className="pt-3"
              controlId="formKeywords"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              <Form.Label>Email</Form.Label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                  type="text"
                  placeholder="Enter email address"
                  autoComplete="off"
                />
              </div>
            </Form.Group>

            <Form.Group
              className="pt-3"
              controlId="formKeywords"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <Form.Label>Name</Form.Label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                  type="text"
                  placeholder="Enter email address"
                  autoComplete="off"
                />
              </div>
            </Form.Group>

            <Form.Group
              className="pt-3"
              controlId="formKeywords"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            >
              <Form.Label>Password</Form.Label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  autoComplete="off"
                />
              </div>
            </Form.Group>
          </Form>
          <br />
          <Stack direction="horizontal" gap={3}>
            <Button variant="secondary" onClick={() => handleRegister()}>
              Register
            </Button>
            <div className="vr" />
            <Button variant="outline-danger" onClick={() => navigate("/login")}>
              Back
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Register;
