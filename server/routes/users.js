const express = require("express");
const pool = require("./db");
const router = express.Router();
const port = 5000;

//password encryption
const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");


var cors = require("cors");

router.use(cors());
router.use(express.json());

//get all users (for testing)
router.get("/", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (error) {
    console.error(error);
  }
});

//create user
router.post("/register", async (req, res) => {
  try {
    const { name, email, pass } = req.body;

    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(pass, salt, async function (err, hash) {
        const newUser = await pool.query(
          "INSERT INTO users (name, email, pass) VALUES($1, $2, $3) RETURNING *",
          [name, email, hash]
        );

        console.log(req.body);

        res.sendStatus(200);
        res.json(newUser.rows);
      });
    });
  } catch (error) {
    console.error(error.message);
    res.sendStatus(400);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(
      "SELECT * FROM users WHERE email = $1 LIMIT 1",
      [email]
    );

    userData = user.rows[0];

    console.log(userData);

    // maybe work on these confusing pass/password variables
    const { pass } = userData;

    if (userData) {
      const validPassword = await bcrypt.compare(password, pass);
      if (validPassword) {

        //test token generate
        token = generateAccessToken(userData)

        res.json({
          user: userData,
          token: token
        })

        //res.status(200).json({ message: "Valid password" });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
    //res.json(user.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//update a user
router.put("/:user_id", async (req, res) => {
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
router.delete("/:user_id", async (req, res) => {
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


function generateAccessToken(user) {
  var u = {
    user_id: user.user_id,
    name: user.name,
    email: user.email,
  }

  return jwt.sign(u, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

module.exports = router, generateAccessToken;
