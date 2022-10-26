const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;


app.use(cors());

const courses = require('./data/courses.json');
const courseName = require('./data/name.json');

app.get('/', (req, res) => {
    res.send('Courses API created');
});

app.get('/course-list', (req, res) => {
    res.send(courseName);
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c => c.id === id)
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('Server is running on port', port);
})
