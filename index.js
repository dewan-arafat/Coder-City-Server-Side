const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courseName = require('./data/courses.json');


app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/course-name', (req, res) => {
    res.send(courseName)
});
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseName.find(n => n.id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})