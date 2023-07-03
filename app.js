const express = require('express');
const app = express();

app.listen(3000,() => {
    console.log("server is listening on port 3000");
})

app.use(express.static('public'));

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
})

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
})

app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html');
})