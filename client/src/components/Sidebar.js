import React from "react";
import { Card, Form, Button } from "react-bootstrap";

export function Sidebar() {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title class='text-center'><strong>Search and Filter</strong></Card.Title>
          <Form>
            <Form.Group
            class='pt-2' 
              controlId="formKeywords"
              onKeyDown={(e) => console.log()}
              onChange={() => console.log()}
            >
              <Form.Label>Search</Form.Label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                  type="text"
                  placeholder="keyword search"
                  autoComplete="off"
                />
              </div>
            </Form.Group>

            <Form.Group class='pt-2' controlId="formMfg">
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control as="select" onClick={() => console.log()}>
                <option>Choose a brand</option>
                <option>Discraft</option>
                <option>Innova</option>
                <option>Discmania</option>
                <option>MVP</option>
              </Form.Control>
            </Form.Group>

            <Form.Group class='pt-2' controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" onClick={() => console.log()}>
                <option>Choose a type</option>
                <option>Driver</option>
                <option>Fairway</option>
                <option>Midrange</option>
                <option>Putter</option>
              </Form.Control>
            </Form.Group>

            <div class='pt-2'  style={{ display: "flex", flexDirection: "row" }}>
              <Form.Group
                controlId="minSpeed"
                onChange={() => console.log()}
                onKeyDown={(e) => console.log()}
              >
                <Form.Label>Speed</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="minimum"
                  autoComplete="off"
                />
              </Form.Group>
              <div
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  marginTop: "38px",
                }}
              >
                to
              </div>
              <Form.Group
                controlId="maxSpeed"
                style={{ marginTop: "32px" }}
                onChange={() => console.log()}
                onKeyDown={(e) => console.log()}
              >
                <Form.Control
                  type="text"
                  placeholder="maximum"
                  autoComplete="off"
                />
              </Form.Group>
            </div>

            <div class='pt-2' style={{ display: "flex", flexDirection: "row" }}>
              <Form.Group
                controlId="minGlide"
                onChange={() => console.log()}
                onKeyDown={(e) => console.log()}
              >
                <Form.Label>Glide</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="minimum"
                  autoComplete="off"
                />
              </Form.Group>
              <div
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  marginTop: "38px",
                }}
              >
                to
              </div>
              <Form.Group
                controlId="maxGlide"
                style={{ marginTop: "32px" }}
                onChange={() => console.log()}
                onKeyDown={(e) => console.log()}
              >
                <Form.Control
                  type="text"
                  placeholder="maximum"
                  autoComplete="off"
                />
              </Form.Group>
            </div>

            <div class='pt-2' style={{ display: "flex", flexDirection: "row" }}>
              <Form.Group
                controlId="minTurn"
                onChange={() => console.log()}
                onKeyDown={(e) => console.log()}
              >
                <Form.Label>Turn</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="minimum"
                  autoComplete="off"
                />
              </Form.Group>
              <div
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  marginTop: "38px",
                }}
              >
                to
              </div>
              <Form.Group
                controlId="maxTurn"
                style={{ marginTop: "32px" }}
                onChange={() => console.log()}
                onKeyDown={(e) => console.log()}
              >
                <Form.Control
                  type="text"
                  placeholder="maximum"
                  autoComplete="off"
                />
              </Form.Group>
            </div>

            <div class='pt-2' style={{ display: "flex", flexDirection: "row" }}>
              <Form.Group
                controlId="minFade"
                onChange={() => console.log()}
                onKeyDown={(e) => console.log()}
              >
                <Form.Label>Fade</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="minimum"
                  autoComplete="off"
                />
              </Form.Group>
              <div
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  marginTop: "38px",
                }}
              >
                to
              </div>
              <Form.Group
                controlId="maxFade"
                style={{ marginTop: "32px" }}
                onChange={() => console.log()}
                onKeyDown={(e) => console.log()}
              >
                <Form.Control
                  type="text"
                  placeholder="maximum"
                  autoComplete="off"
                />
              </Form.Group>
            </div>
          </Form>
          <br />
          <Button variant="danger" onClick={() => console.log()}>
            Clear Filters
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Sidebar;
