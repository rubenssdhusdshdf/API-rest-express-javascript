const express = require('express'); // imports express.js
const routerApi = require('./Routes'); // Import the routes

const Chance = require('chance');
const chance = new Chance();

const app = express(); // create an instance of an express app

// Middleware should be set after the app is created
app.use(express.json()); // This middleware is used to parse incoming JSON requests

const port = 3000; // specifies the port number the server will listen to

// Home endpoint
app.get('/', (req, response) => {
  response.send('Hello, server in express');
});

// generate a test new path
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

// Pass the app instance to routerApi to handle the routes
routerApi(app);

app.listen(port, () => {
  console.log('Port ' + port);
});
