const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

let serverPort = 3000;
let host = 'localhost';

app.set('view engine', 'ejs');

// Start Server
app.listen(serverPort, () => {
    console.log('Server started on : ' + serverPort);
});

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


// Set View Engine
app.set('views', path.join(__dirname, 'views'));

// Index Route
app.get('/', (req, res) => {
    res.render('index');
});

// About Route
app.get('/resume', (req, res) => {
    res.render('resume');
});

// blog Route
app.get('/blog', (req, res) => {
    res.render('blog');
});

// blog Route
app.get('/contactMe', (req, res) => {
    res.render('contactMe');
});