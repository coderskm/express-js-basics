const express = require("express");
const app = express();
app.get("", (req, res) => {
    console.log(req.query);
  res.send("<h1>Welcome to home page<h1>"+""+req.query.name);
});
app.get("/about", (req, res) => {
    console.log(req.query);
  res.send("About Me : A Backend Developer. My pointer is " + req.query.pointer);
});
app.listen(4000);
