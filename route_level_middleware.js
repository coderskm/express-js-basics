const express = require("express");
const app = express();
const reqAge = require('./middleware')
const route = express.Router();

route.use(reqAge);

app.get("/", reqAge, (req, res) => {
  res.send("This is home page");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/projects", (req, res) => {
  res.send("projects here");
});

route.get("/contacts", (req, res) => {
  res.send("contacts here");
});

route.get("/menu", (req, res) => {
  res.send("menu here");
});

app.use('/', route);

app.listen(8000);
