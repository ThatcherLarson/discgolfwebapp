// for eventual user routes

const express = require('express');
const pool = require("./db");
const router = express.Router();
const app = express()
const port = 5000
var cors = require('cors')

app.use(cors())
app.use(express.json()) 

//create user
app.post("/users", async (req, res) => {
    try {
      
      const {name, email, salt, pass} = req.body
  
      console.log(req.body)
  
      const newUser = await pool.query(
        "INSERT INTO users (name, email, password, hash) VALUES($1, $2, $3, $4) RETURNING *", //tbd
        [name, email, salt, pass]
      );
      //res.sendStatus(200)
      res.json(newUser.rows)
    } catch (error) {
      console.error(error.message);
      res.sendStatus(400)
    }
  });


module.exports = router;