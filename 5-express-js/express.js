const fs = require('fs');
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayout);

app.get('/', (req, res) => {
    const file = fs.readFileSync('./data.json', 'utf-8');
    const contacts = JSON.parse(file);

    res.render('index', {
        nama: 'Dionovan Ramadhani',
        contacts,
        layout: 'layouts/main-layouts'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layouts'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-layouts'
    });
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const category = req.query.category;

    res.send(`Product id: ${id} <br> Category id: ${category}`);
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('Page not found: 404');
});

app.listen(port, () => {
    console.log(`Server is listening to port http://localhost:${port}`);
})