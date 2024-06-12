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

app.get("/api", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Ritik"
        },
        {
            id: 2,
            name: "Jatin"
        },
        {
            id: 3,
            name: "Riya"
        }
    ])
})

app.listen(8000, 'localhost');

// We can use res.send to send object or array but res.json can convert non-objects materials 
// as well without any error such as null or undefined, which are not valid JSON