const express = require('express');
const app = express();
const {pool} = require('./db');
const PORT = 3000;

app.use(express.json());

app.post('/add', async (req, res) => {
    try {
        const {nama, email, noHP} = req.body;

        const newData = await pool.query(
            'INSERT INTO contacts (nama, email, noHP) VALUES ($1, $2, $3) RETURNING *',
            [nama, email, noHP]
        )
        res.json(newData.rows);
    } catch (error) {
        console.log(error.message);
    }
});

app.get('/list', async (req, res) => {
    try {
        const contacts = await pool.query('SELECT * FROM contacts');
        res.json(contacts.rows);
    } catch (error) {
        console.log(error.message);
    }
})

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`);
})