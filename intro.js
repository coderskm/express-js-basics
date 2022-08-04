const express = require('express')
const app = express();
app.get('', (req, res) => {
    res.send("<h1>Welcome to home page<h1>")
});
app.get('/about', (req, res) => {
    res.send("About Me : A Backend Developer")
})
app.listen(4000);