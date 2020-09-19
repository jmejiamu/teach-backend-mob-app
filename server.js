const express = require('express');
const knex = require('knex');
const cors = require('cors');
const dotenv = require('dotenv');

// Setting up enviromental variables 
dotenv.config();

const app = express();

// Setting up middleware
app.use(express.json());
app.use(cors());

// first example and install nodemon
app.get('/', (req, res) => {
    res.send('This is our home');
});

app.get('/about', (req, res) => {
    res.send('This about end point');
});

app.get('/home', (req, res) => {
    res.send('This home end point');
});
app.listen(3001, () => {
    console.log('app is running..');
});
