const express = require('express');
const morgan = require('morgan');

const artistsRouter = require('./routes/artistRouter');
const eventsRouter = require('./routes/eventsRouter');
const aboutRouter = require('./routes/aboutRouter');
const contactRouter = require('./routes/contactRouter');
const adbRouter = require('./routes/adbRouter');

// Server variables
const hostname = 'localhost';
const port = 3000;

// Returns an express server app
const app = express();

// Configure Morgan to log using the dev ver
app.use(morgan('dev'));

// When the server receives requests in json format, this will handle the parsing
// of the json data into JS properties of the request object
app.use(express.json());

// Provide the root paths
app.use('/artists', artistsRouter);
app.use('/events', eventsRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/adb', adbRouter);

// Setup express to server files from the public folder
app.use(express.static(__dirname + '/public'));

// Respond to server requests
app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Welcome to J&J Promotions</h1></body></html>');
});

// Start listening to the server
// Creates both an instance of the HTTP Server class and starts to listen to it
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});