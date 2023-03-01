const express = require('express');
const app = express();
const http = require("http");




const port = 4000
app.get("/", (req, res) => {
    res.send("Hello Willem & Renske")
  })
app.listen(port, () => console.log(`The server is listening on port ${port}`))