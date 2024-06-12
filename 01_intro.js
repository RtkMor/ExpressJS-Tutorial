const express = require('express');
const app = new express();

// Express.js is a framework for Node.js
// while using only Node.js we were routing using the if-else statements but here its very easy to do so

app.get('/', (req, res) => {
    res.send("Hello from the HOME side!");
})

app.get('/contact', (req, res) => {
    res.send("Hello from the CONTACT side!");
})

app.get('/about', (req, res) => {
    res.send("Hello from the ABOUT side!");
})

app.get('/rtkmor', (req, res) => {
    res.send("Hello from the RTKMOR side!");
})

app.listen(8000, 'localhost');