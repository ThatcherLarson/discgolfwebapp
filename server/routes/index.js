const express = require('express');
const pool = require("./db");
const router = express.Router();
const app = express()
const port = 5000
var cors = require('cors')

app.use(cors())
app.use(express.json()) 


//get all discs
app.get("/discs", async (req, res) => {
  try {
    const allDiscs = await pool.query('SELECT * FROM discs')
    res.json(allDiscs.rows)
  } catch (error) {
    console.error(error)
  }
});

//add a disc
app.post("/discs", async (req, res) => {
  try {
    
    const {brand, mold, speed, glide, turn, fade} = req.body

    console.log(req.body)

    const newDisc = await pool.query(
      "INSERT INTO discs (brand, mold, speed, glide, turn, fade) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [brand, mold, speed, glide, turn, fade]
    );
    res.sendStatus(200)
  } catch (error) {
    console.error(error.message);
  }
});

// get a disc
app.get("/discs/:disc_id", async (req, res) => {
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
app.put("/discs/:disc_id", async (req, res) => {
  try {
   
    const {disc_id} = req.params
    const {brand, mold, speed, glide, fade, turn} = req.body

    const updateDisc = await pool.query(
      "UPDATE discs SET brand = $1, mold = $2, speed = $3, glide = $4, turn = $5, fade = $6 WHERE disc_id = $7",
      [brand, mold, speed, glide, turn, fade, disc_id]
    );
    res.send('Updated Disc: ' + brand + ' ' + mold);
  } catch (error) {
    console.error(error.message);
  }
});

//remove a disc
app.delete("/discs/:disc_id", async (req, res) => {
  try {
    const { disc_id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM discs WHERE disc_id = $1", [
      disc_id,
    ]);
    res.json("Disc deleted");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

module.exports = router;