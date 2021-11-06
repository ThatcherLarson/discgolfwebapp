import { Card, Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDiscs,
  stateSelector,
  setMinSpeed,
  setMaxSpeed,
  setMinGlide,
  setMaxGlide,
  setMinTurn,
  setMaxTurn,
  setMinFade,
  setMaxFade,
  setManufacturer,
  setSearchFilter,
} from "../features/discs/discsSlice";

export function Sidebar() {
  const dispatch = useDispatch();

  const {
    minSpeed,
    maxSpeed,
    minGlide,
    maxGlide,
    minTurn,
    maxTurn,
    minFade,
    maxFade,
    manufacturer,
    searchFilter,
  } = useSelector(stateSelector);

  const handleClearFilters = () => {
    //not sure why the values dont clear from sidebar, research 'ref' with forms?
    dispatch(setSearchFilter(""));
    dispatch(setManufacturer(""));
    dispatch(setMinSpeed(0));
    dispatch(setMaxSpeed(20));
    dispatch(setMinGlide(0));
    dispatch(setMaxGlide(20));
    dispatch(setMinTurn(-20));
    dispatch(setMaxTurn(20));
    dispatch(setMinFade(-20));
    dispatch(setMaxFade(20));
  };

  return (
    <div className="pt-5">
      <Card>
        <Card.Body>
          <Card.Title class="text-center">
            <strong>Search and Filter</strong>
          </Card.Title>
          <Form>
            <Form.Group
              class="pt-2"
              controlId="formKeywords"
              value={searchFilter}
              onChange={(e) => dispatch(setSearchFilter(e.target.value))}
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

            <Form.Group class="pt-2" controlId="formMfg">
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => dispatch(setManufacturer(e.target.value))}
              >
                <option>Choose a brand</option>
                <option>Discraft</option>
                <option>Innova</option>
                <option>Discmania</option>
                <option>MVP</option>
              </Form.Control>
            </Form.Group>

            <div class="pt-2" style={{ display: "flex", flexDirection: "row" }}>
              <Form.Group
                controlId="minSpeed"
                onChange={(e) => dispatch(setMinSpeed(e.target.value))}
                value={minSpeed}
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
                onChange={(e) => dispatch(setMaxSpeed(e.target.value))}
                value={maxSpeed}
              >
                <Form.Control
                  type="text"
                  placeholder="maximum"
                  autoComplete="off"
                />
              </Form.Group>
            </div>

            <div class="pt-2" style={{ display: "flex", flexDirection: "row" }}>
              <Form.Group
                controlId="minGlide"
                onChange={(e) => dispatch(setMinGlide(e.target.value))}
                value={minGlide}
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
                onChange={(e) => dispatch(setMaxGlide(e.target.value))}
                value={maxGlide}
              >
                <Form.Control
                  type="text"
                  placeholder="maximum"
                  autoComplete="off"
                />
              </Form.Group>
            </div>

            <div class="pt-2" style={{ display: "flex", flexDirection: "row" }}>
              <Form.Group
                controlId="minTurn"
                onChange={(e) => dispatch(setMinTurn(e.target.value))}
                value={minTurn}
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
                onChange={(e) => dispatch(setMaxTurn(e.target.value))}
                value={maxTurn}
              >
                <Form.Control
                  type="text"
                  placeholder="maximum"
                  autoComplete="off"
                />
              </Form.Group>
            </div>

            <div class="pt-2" style={{ display: "flex", flexDirection: "row" }}>
              <Form.Group
                controlId="minFade"
                onChange={(e) => dispatch(setMinFade(e.target.value))}
                value={minFade}
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
                onChange={(e) => dispatch(setMaxFade(e.target.value))}
                value={maxFade}
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
          <Button variant="danger" onClick={() => handleClearFilters()}>
            Clear Filters
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Sidebar;
