const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const allCategory = require('./data/coursesCategory.json')
const allCourse = require('./data/allCourses.json')

app.get('/', (req, res) => {
    res.send('EduCare server is running');
});

app.get('/allcategory', (req, res) => {
    res.send(allCategory);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category = allCategory.find(category => category.id === id);
    res.send(category);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const SelectedCourse = allCourse.find(course => course._id === id)
    res.send(SelectedCourse);
})

app.get('/allcourses', (req, res) => {
    res.send(allCourse)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;

    if (id === '08') {
        res.send(allCourse)
    }
    const selectedCourse = allCourse.filter(course => course.category_id == id)
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log(`Educare is running on Port ${port}`);
})