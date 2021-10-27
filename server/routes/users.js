// for eventual user routes

const express = require("express");
const pool = require("./db");
const router = express.Router();
const app = express();
const port = 5000;
var cors = require("cors");

app.use(cors());
app.use(express.json());

//create user
app.post("/users", async (req, res) => {
  try {
    const { name, email, salt, pass } = req.body;

    console.log(req.body);

    const newUser = await pool.query(
      "INSERT INTO users (name, email, pass, salt) VALUES($1, $2, $3, $4) RETURNING *", 
      [name, email, pass, salt]
    );
    //res.sendStatus(200)
    res.json(newUser.rows);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(400);
  }
});

//update a user
app.put("/users/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    const { name, email } = req.body; 

    //fix this for user
    const updateUser = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE user_id = $3",
      [name, email, user_id]
    );
    res.send("Updated user: " + name);
  } catch (error) {
    console.error(error.message);
  }
});

//remove a user
app.delete("/users/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    const deleteUser = await pool.query(
      "DELETE FROM users WHERE user_id = $1",
      [user_id]
    );
    res.json("User deleted");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = router;
