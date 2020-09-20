const express = require('express');
const knex = require('knex');
const cors = require('cors');
const dotenv = require('dotenv');

const addproduct = require('./routers/post-data');
const getproduct = require('./routers/get-data');

// Setting up enviromental variables 
dotenv.config();

const app = express();

// Setting up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.HOSTNAME,
        user: process.env.USERNAMEPG,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
})

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

// adding a product
app.post('/addproduct', (req, res) => {
    addproduct.addPost(req, res, db);
})

// getting all data products
app.get('/allproduct', (req, res) => {
    getproduct.showdata(req, res, db);
})

app.listen(3001, '192.168.1.69', () => {
    console.log('app is running..');
});
