import React from "react";
import Register from "./Register";
import Home from "./Home";
import { Card, Form, Button, Stack } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    try {
      // post call to /users/login to auth user
      const body = { email, password };
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.status === 200) {

        // TODO: store token in localStorage
        const data = await response.json();
        localStorage.setItem("token", data.token) 
        console.log(data.token)

        navigate("/home");
      } else if (response.status === 400) {
        alert("Incorrect username or password");
      } else {
        alert("Error logging in. User may not exist.");
      }
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
            <strong>Sign in</strong>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <Button variant="secondary" onClick={() => handleLogin()}>
              Log in
            </Button>
            <div className="vr" />
            <Button
              variant="outline-danger"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
