const express = require("express");
const app = express();
app.get("", (req, res) => {
  console.log(req.query);
    res.send(`<h1>Welcome!</h1>
  <input type="text" placeholder="name" value="${req.query.name}" />
  <button>Click Me</button><br/>
  <a href="/about">Click to know more about me</a>`);
});
app.get("/about", (req, res) => {
    res.send(`My name is Sumit. I am a backend developer. 
  <a href="/">Move to Home</a>`);
});
app.listen(4000);
