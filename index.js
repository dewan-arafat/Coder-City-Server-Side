const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courseName = require('./data/courses.json');


app.get('/', (req, res) => {
    res.send('News API Running');
});