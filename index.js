const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const category = require('./data/coursesCategory.json')
const allCategory = require('./data/allCourses.json')

app.get('/', (req, res) => {
    res.send('EduCare server is running update');
});

app.get('/course', (req, res) => {
    res.send(category);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;

    const categori = category.find(cg => cg.id == id);

    res.send(categori);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);

    const selectedProduct = allCategory.filter(catagory => catagory.category_id === id)

    res.send(selectedProduct);
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