import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Accordion,
  Button,
  Modal,
  Form,
  Container,
  Row,
  Col,
  Stack,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  addDisc,
  removeDisc,
  updateDisc,
  getDiscs,
  stateSelector,
  discsFilterSelector,
  numDiscsSelector,
} from "./discsSlice";
import styles from "./Discs.module.css";

const url = "http://localhost:5000";

export function Discs() {
  const [show, setShow] = useState(false);

  const [brand, setBrand] = useState();
  const [mold, setMold] = useState();
  const [type, setType] = useState();
  const [speed, setSpeed] = useState();
  const [glide, setGlide] = useState();
  const [turn, setTurn] = useState();
  const [fade, setFade] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const discsList = useSelector(discsFilterSelector);
  const numDiscs = discsList.length; // TODO: support pagination, e.g. on page 2 show items: (n-1) * items per page through n * items per page, == 20 to 40

  const dispatch = useDispatch();
  let navigate = useNavigate();

  // dispatch our thunk when component first mounts
  useEffect(() => {
    dispatch(fetchDiscs());
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login")
  }

  const handleEdit = async (e, disc) => {
    e.stopPropagation();

    console.log(disc);

    //need to figure out synchronous state update
    setBrand(disc.brand);
    setMold(disc.mold);
    setSpeed(disc.speed);
    setGlide(disc.glide);
    setTurn(disc.turn);
    setFade(disc.fade);

    handleShow(); // reuse same model as adding a disc
    console.log("disc id? " + disc.disc_id);
    //submit edit with id
  };

  const submitEdit = async (id) => {
    const token = localStorage.getItem("token");
    console.log("user token: " + token);
    const bearer = "Bearer " + token;
    try {
      const body = { brand, mold, type, speed, glide, turn, fade };
      const response = await fetch("http://localhost:5000/discs" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: bearer,
        },
        body: JSON.stringify(body),
      });

      if (response.status === 403) {
        alert("Invalid user token");
      }

      if (response.status === 400) {
        console.log("Error updating discs");
      } else {
        const data = await response.json();

        console.log(data[0]);
        dispatch(updateDisc(data[0])); //TODO: test updateDisc reducer
      }
    } catch (error) {
      console.error(error);
    }
  };

  //TODO: add roles so only admins can delete, add, edit discs
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    const token = localStorage.getItem("token");
    console.log("user token: " + token);
    const bearer = "Bearer " + token;
    try {
      const response = await fetch("http://localhost:5000/discs/" + id, {
        method: "DELETE",
        headers: {
          Authorization: bearer,
        },
      });
      if (response.status === 200) {
        console.log(id);
        dispatch(removeDisc(id));
      }

      if (response.status === 403) {
        alert("Invalid user token");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //TODO: figure out how to determine if we are in context of edit or adding a disc
  const handleSaveClose = async () => {
    submitNewDisc();
  };

  const submitNewDisc = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("user token: " + token);
      const bearer = "Bearer " + token;
      const body = { brand, mold, type, speed, glide, turn, fade };
      const response = await fetch("http://localhost:5000/discs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: bearer,
        },
        body: JSON.stringify(body),
      });
      console.log(response);

      if (response.status === 403) {
        alert("Invalid user token");
      }

      if (response.status === 400) {
        console.log("Disc already exists or not all fields are filled out.");
      } else {
        const data = await response.json();

        console.log(data[0]);
        dispatch(addDisc(data[0]));

        setShow(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const renderAddDiscModal = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Disc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group class="pt-2" controlId="formMfg">
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setBrand(e.target.value)}
              >
                <option>Choose a brand</option>
                <option>Discraft</option>
                <option>Innova</option>
                <option>Discmania</option>
                <option>MVP</option>
              </Form.Control>
            </Form.Group>

            <Form.Group
              class="pt-2"
              controlId="formKeywords"
              value={mold}
              onChange={(e) => setMold(e.target.value)}
            >
              <Form.Label>Disc Name</Form.Label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                  type="text"
                  placeholder="keyword search"
                  autoComplete="off"
                />
              </div>
            </Form.Group>

            <Form.Group class="pt-2" controlId="formMfg">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setType(e.target.value)}
              >
                <option>Choose a brand</option>
                <option>Distance</option>
                <option>Fairway</option>
                <option>Midrange</option>
                <option>Putter</option>
              </Form.Control>
            </Form.Group>

            <Form.Group
              class="pt-2"
              controlId="formKeywords"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
            >
              <Form.Label>Speed</Form.Label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                  type="number"
                  placeholder="Set speed"
                  autoComplete="off"
                />
              </div>
            </Form.Group>

            <Form.Group
              class="pt-2"
              controlId="formKeywords"
              value={glide}
              onChange={(e) => setGlide(e.target.value)}
            >
              <Form.Label>Glide</Form.Label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                  type="number"
                  placeholder="keyword search"
                  autoComplete="off"
                />
              </div>
            </Form.Group>

            <Form.Group
              class="pt-2"
              controlId="formKeywords"
              value={turn}
              onChange={(e) => setTurn(e.target.value)}
            >
              <Form.Label>Turn</Form.Label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                  type="number"
                  placeholder="keyword search"
                  autoComplete="off"
                />
              </div>
            </Form.Group>

            <Form.Group
              class="pt-2"
              controlId="formKeywords"
              value={fade}
              onChange={(e) => setFade(e.target.value)}
            >
              <Form.Label>Fade</Form.Label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                  type="number"
                  placeholder="keyword search"
                  autoComplete="off"
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const renderDiscs = () => {
    return discsList.map((disc) => (
      <Accordion key={disc.disc_id}>
        <Accordion.Item eventKey={disc.disc_id}>
          <Accordion.Header>
            <Container fluid>
              <Row>
                <Col>
                  <h3>
                    {disc.brand} {disc.mold}
                  </h3>
                </Col>
                <Col md={{ span: 3, offset: 3 }}>
                  <Stack direction="horizontal" gap={3}>
                    <Button
                      variant="primary"
                      onClick={(e) => handleEdit(e, disc)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={(e) => handleDelete(e, disc.disc_id)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </Col>
              </Row>
            </Container>
          </Accordion.Header>
          <Accordion.Body>Speed: {disc.speed}</Accordion.Body>
          <Accordion.Body>Glide: {disc.glide}</Accordion.Body>
          <Accordion.Body>Turn: {disc.turn}</Accordion.Body>
          <Accordion.Body>Fade: {disc.fade}</Accordion.Body>
          <Accordion.Body>Type: {disc.type}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ));
  };

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>Discs!</span>
        <button
          className={styles.button}
          aria-label="Add disc"
          data-toggle="modal"
          data-target="#addDiscModal"
          onClick={() => handleShow()}
        >
          Add Disc
        </button>
        <button className={styles.button} onClick={() => handleLogout()}>
          Log Out
        </button>
        {renderAddDiscModal()}
      </div>
      {renderDiscs()}
      Filtered number of Discs: {numDiscs}
    </div>
  );
}

export function fetchDiscs() {
  return async (dispatch) => {
    try {
      console.log(url + "/discs/");

      const response = await fetch(url + "/discs/");
      const data = await response.json();

      dispatch(getDiscs(data));
    } catch (error) {
      console.error("Error loading discs");
    }
  };
}
