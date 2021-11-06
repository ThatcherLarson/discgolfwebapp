const express = require("express");
const pool = require("./db");
const router = express.Router();
const app = express();
const port = 5000;
var cors = require("cors");

router.use(cors());
router.use(express.json());

//get all discs
router.get("/", async (req, res) => {
  try {
    const allDiscs = await pool.query("SELECT * FROM discs");
    res.json(allDiscs.rows);
  } catch (error) {
    console.error(error);
  }
});

//add a disc
router.post("/", async (req, res) => {
  try {
    const { brand, mold, type, speed, glide, turn, fade } = req.body;

    console.log(req.body);

    const newDisc = await pool.query(
      "INSERT INTO discs (brand, mold, type, speed, glide, turn, fade) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [brand, mold, type, speed, glide, turn, fade]
    );
    //res.sendStatus(200)
    res.json(newDisc.rows);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(400);
  }
});

// get a disc
router.get("/:disc_id", async (req, res) => {
  try {
    const disc_id = req.params.disc_id;
    const disc = await pool.query("SELECT * FROM discs WHERE disc_id = $1", [
      disc_id,
    ]);
    res.json(disc.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//update a disc
router.put("/:disc_id", async (req, res) => {
  try {
    const { disc_id } = req.params;
    const { brand, mold, type, speed, glide, fade, turn } = req.body;

    const updateDisc = await pool.query(
      "UPDATE discs SET brand = $1, mold = $2, type= $3, speed = $4, glide = $5, turn = $6, fade = $7 WHERE disc_id = $7",
      [brand, mold, type, speed, glide, turn, fade, disc_id]
    );
    res.send("Updated Disc: " + brand + " " + mold);
  } catch (error) {
    console.error(error.message);
  }
});

//remove a disc
router.delete("/:disc_id", async (req, res) => {
  try {
    const { disc_id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM discs WHERE disc_id = $1",
      [disc_id]
    );
    res.json("Disc deleted");
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
