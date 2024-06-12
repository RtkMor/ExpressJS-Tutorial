const express = require('express');
const path = require('path');
const PORT_NO = 8000;

const app = new express();

const staticPath = path.join(__dirname, "../public");

// built in middleware
app.use(express.static(staticPath));

// other way to set up index file for '/home' route is
app.get('/home', (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
});

app.get('/about', (req, res) => {
    res.send("Hello from the ABOUT side!")
})

app.get('/', (req, res) => {
    res.send("Hello from the HOME side");
})

// sometimes people get confused, that for the home we should get "Hello from the HOME side" but why the index.html is showing up for it
/* 

The reason the app.get('/', (req, res) => { res.send("Hello from the HOME side"); }) route is not 
being triggered when you visit http://localhost:8000 is because of the order in which 
the middleware and routes are defined in your Express application.

When you use app.use(express.static(staticPath));, it sets up a middleware function that serves static files 
from the staticPath directory (in your case, ../public). This middleware is executed before any routes that 
are defined after it. Therefore, when you request http://localhost:8000, the middleware looks for a file 
named index.html (or other default file) in the public directory and serves it if found.

*/

app.listen(PORT_NO, () => {
    console.log(`Listening to port no. ${PORT_NO}`);
});




