const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const course = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('EduCare server is running now');
});

app.get('/course', (req, res) => {
    res.send(course);
})


app.listen(port, () => {
    console.log(`Educare is running on Port ${port}`);
})