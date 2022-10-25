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

app.get('/course', (req, res) => {
    res.send(category);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;

    const category = allCategory.find(category => category.id === id);

    res.send(category);
})

app.get('/allcourses', (req, res) => {
    res.send(allCourse);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);

    const selectedCourse = allCourse.filter(course => course.category_id === id)

    res.send(selectedCourse);
})

// app.get('/category/:id', (req, res) => {
//     const id = req.params.id;

//     if (id === '08') {
//         res.send(news);
//     }
//     else {
//         const category_News = news.filter(n => n.category_id === id);
//         res.send(category_News);
//     }
// }) 
app.listen(port, () => {
    console.log(`Educare is running on Port ${port}`);
})