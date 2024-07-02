const express = require('express');
const cors = require('cors');
const {pool} = require('./db');
const app = express();

const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Add new contact
app.post('/contact/add', async (req, res) => {
    try {
        const {nama, email, nohp} = req.body;
        const newContact = await pool.query(
                `
                    INSERT INTO contacts (nama, email, nohp) 
                    VALUES ($1, $2, $3) RETURNING *
                `,
                [nama, email, nohp]
        );

        res.json(newContact.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});

// Get All Contacts
app.get('/contact', async (req, res) => {
    try {
        const contacts = await pool.query('SELECT * FROM contacts ORDER BY id');
        res.json(contacts.rows)
    } catch (error) {
        console.log(error.message);
    }
});

// Get Contacts By Detail
app.get('/contact/detail/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const list = await pool.query('SELECT * FROM contacts WHERE id = $1', [id]);

        res.json(list.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
});

// Delete contact
app.delete('/contact/delete/:id', async (req, res) => {
    try {
        const {id} = req.params;
        await pool.query(
            `
                DELETE FROM contacts
                WHERE id = $1
            `,
            [id]
        )
        res.json('Data Berhasil Dihapus!')
    } catch (error) {
        console.log(error.message);
    }
});

// update contact data
app.put('/contact/update/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {nama, email, nohp} = req.body;
    
        await pool.query(
            `
                UPDATE contacts
                SET nama = $1, email = $2, nohp = $3
                WHERE id = $4
            `,
            [nama, email, nohp, id]
        )
    
        res.json('Data updated!');
    } catch (error) {
        console.log(error.message);
    }
})

app.listen(PORT, () => {
    console.log(`Listening to PORT http://localhost:${PORT}`);
})