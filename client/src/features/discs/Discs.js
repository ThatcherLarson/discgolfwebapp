import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Accordion, Button } from "react-bootstrap";
import { addDisc, removeDisc, getDiscs, discsSelector } from "./discsSlice";
import styles from "./Discs.module.css";

const url = "http://localhost:5000";

export function Discs() {
  //const count = useSelector(selectCount);

  const { discsList } = useSelector(discsSelector);

  const dispatch = useDispatch();

  // dispatch our thunk when component first mounts
  useEffect(() => {
    dispatch(fetchDiscs());
  }, [dispatch]);

  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  const renderDiscs = () => {
    return discsList.map(
      (disc) => (
        <Accordion>
          <Accordion.Item eventKey={disc.disc_id}>
            <Accordion.Header>
              <strong>{disc.brand} {disc.mold}</strong> 
            </Accordion.Header>
            <Accordion.Body>Speed: {disc.speed}</Accordion.Body>
            <Accordion.Body>Glide: {disc.glide}</Accordion.Body>
            <Accordion.Body>Turn: {disc.turn}</Accordion.Body>
            <Accordion.Body>Fade: {disc.fade}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )
    );
  };

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Remove disc"
          onClick={() => dispatch(removeDisc())}
        >
          -
        </button>

        <span className={styles.value}>Discs!</span>
        <button
          className={styles.button}
          aria-label="Add disc"
          onClick={() => dispatch(addDisc())}
        >
          +
        </button>
      </div>

      <div>{renderDiscs()}</div>
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
