const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get('/profile', (req, resp) => {
    const user = {
        Name: "Sumit Kumar Mishra",
        email: "sm412387@gmail.com",
        city: "noida",
        skills:['C','C++','JS']
    }
    resp.render('profile', { user });
})

app.get('/login', (req, resp) => {
    resp.render('login');
})
app.listen(8000);
