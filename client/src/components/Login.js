import React from "react";
import Register from "./Register";
import Home from "./Home";
import { Card, Form, Button, Stack } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Login() {
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
          <Card.Title style={{ fontSize: "36px" }} class="text-center">
            <strong>Sign in</strong>
          </Card.Title>
          <Form>
            <Form.Group
              class="pt-3"
              controlId="formKeywords"
              //value={searchFilter}
              //onChange={(e) => dispatch(setSearchFilter(e.target.value))}
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
              class="pt-3"
              controlId="formKeywords"
              //value={searchFilter}
              //onChange={(e) => dispatch(setSearchFilter(e.target.value))}
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
            <Button variant="secondary">Submit</Button>
            <div className="vr" />
            <Button variant="outline-danger">Register</Button>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
