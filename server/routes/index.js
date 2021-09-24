var express = require('express');
const pool = require("./db");
const app = express()


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})