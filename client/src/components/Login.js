import React from "react";
import Register from "./Register";
import Home from "./Home";
import { Card, Form, Button, Stack } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

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
            <Button variant="secondary" onClick={() => navigate("/home")}>
              Submit
            </Button>
            <div className="vr" />
            <Button
              variant="outline-danger"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
            {/* <Link to="/register">Register</Link> */}
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
