const express = require("express");
const pool = require("./db");
const router = express.Router();
//const app = express();
const port = 5000;
var cors = require("cors");

router.use(cors());
router.use(express.json());

//get all discs
router.get("/discs", async (req, res) => {
  try {
    const allDiscs = await pool.query("SELECT * FROM discs");
    res.json(allDiscs.rows);
  } catch (error) {
    console.error(error);
  }
});

//add bag for user
router.post("/bags", async (req, res) => {
  try {
    const { user_id } = req.body;

    console.log(req.body);

    const newBag = await pool.query(
      "INSERT INTO bags (user_id) VALUES($1) RETURNING *",
      [user_id]
    );
    //res.sendStatus(200)
    res.json(newBag.rows);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(400);
  }
});

//remove a bag
router.delete("/bags/:bag_id", async (req, res) => {
  try {
    const { bag_id } = req.params;
    const deleteBag = await pool.query(
      "DELETE FROM bags WHERE bag_id = $1",
      [disc_id]
    );
    res.json("Disc deleted");
  } catch (error) {
    console.error(error.message);
  }
});



module.exports = router;
