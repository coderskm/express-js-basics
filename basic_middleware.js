const express = require('express')
const app = express();

const reqAge = (req, resp, next) => {
    if (!req.query.age)
    {
        resp.send("Please provide age");
    }
    else if (req.query.age < 18)
    {
        resp.send("You cannot access");
    }
    else {
        next();
    }
}

app.use(reqAge);

app.get("/", (req, res) => {
    res.send("This is home page");
})

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.listen(8000);