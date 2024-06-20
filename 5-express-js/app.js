const express = require('express');
const expressLayout = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const {check, validationResult} = require('express-validator');
const {pool} = require('./db');

const { loadContacts, addContact, generateID, findContact, deleteContact, updateContact } = require('./utils/contact')
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(expressLayout);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser('secret'));
app.use(session({
    cookie: {maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
app.use(express.json());

// Halaman home
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        nama: 'Dionovan Ramadhani',
        msg: 'Semoga harimu menyenangkan 🙏',
        layout: 'layouts/main-layouts'
    });
});

// Halaman about
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        layout: 'layouts/main-layouts'
    });
});

// Halaman contact
app.get('/contact', async (req, res) => {
    try {
        const fetchContacts = await pool.query('SELECT * FROM contacts ORDER BY id');
        const contacts = loadContacts(fetchContacts.rows);
        // res.json(fetchContacts.rows);
    
        res.render('contact', {
            title: 'Contact List',
            contacts,
            msg: req.flash('msg'),
            layout: 'layouts/main-layouts'
        });
    } catch (error) {
        console.log(error.message);
    }
});

// Halaman tambah contact
app.get('/contact/add', (req, res) => {
    res.render('contact-add', {
        title: 'Form Tambah Contact',
        layout: 'layouts/main-layouts'
    })
});

// Proses tambah contact
app.post('/contact', 
    [
        check('email', 'Email tidak  valid!').isEmail(),
        check('nohp', 'No HP tidak valid!').isMobilePhone('id-ID')
    ],
    
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                res.render('contact-add', {
                    title: 'Form Tambah Contact',
                    errors: errors.array(),
                    layout: 'layouts/main-layouts'
                })
            } else {
                // addContact(newContact);
                const {nama, email, nohp} = req.body;
                const fetchContact = await pool.query(
                    `
                        INSERT INTO contacts (nama, email, nohp) 
                        VALUES ($1, $2, $3) RETURNING *
                    `,
                    [nama, email, nohp]
                );

                // res.json(fetchContact.rows[0]);
                req.flash('msg', `${nama} telah ditambahkan!`);
                res.redirect('/contact');
            }

            
            // const contacts = loadContacts();
            // const id = generateID(contacts.length);
        
            // const newContact = req.body;
        
        } catch (error) {
            console.log(error.message);
        }
});

// Halaman detail
app.get('/contact/detail/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const fetchContacts = await pool.query(
            'SELECT * FROM contacts WHERE id = $1',
            [id]
        );
        const contact = fetchContacts.rows[0];

        res.render('contact-detail', {
            title: 'Contact Detail',
            contact,
            layout: 'layouts/main-layouts'
        })
    } catch (error) {
        console.log(error.message);
    }

});

// Delete contact
app.get('/contact/delete/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const fetchContact = await pool.query('SELECT * FROM contacts WHERE id = $1', [id]);
        const contact = fetchContact.rows[0];

        const deleteContact = await pool.query(
            `
                DELETE FROM contacts
                WHERE id = $1
            `,
            [id]
        );

        // res.json(`${contact.nama} Berhasil dihapus`);
        req.flash('msg', `${contact.nama === null ? '' : contact.nama} Berhasil dihapus`);
        res.redirect('/contact');
    } catch (error) {
        console.log(error.message);
    }
});

// Edit contact
app.get('/contact/edit/:id', async (req, res) => {
    const {id} = req.params;
    const fetchContact = await pool.query('SELECT * FROM contacts WHERE id = $1', [id]);
    const contact = fetchContact.rows[0];

    res.render('contact-edit', {
        id,
        title: 'Form Edit Contact',
        contact,
        layout: 'layouts/main-layouts'
    })
});

// Proses edit contact
app.post('/contact/update/:id', 
    [
        check('email', 'Email tidak  valid!').isEmail(),
        check('nohp', 'No HP tidak valid!').isMobilePhone('id-ID')
    ],
    async (req, res) => {
        try {
            const {id} = req.params;
            const {nama, email, nohp} = req.body;
            const newContact =  req.body;
            const errors = validationResult(req);
    
            if (!errors.isEmpty()) {
                res.render('contact-edit', {
                    title: 'Form Edit Contact',
                    id,
                    errors: errors.array(),
                    contact: newContact,
                    layout: 'layouts/main-layouts'
                })
            } else {
                const updateContact = await pool.query(
                    `
                        UPDATE contacts
                        SET nama = $1, email = $2, nohp = $3
                        WHERE id = $4
                    `,
                    [nama, email, nohp, id]
                )
                req.flash('msg', 'Data berhasil diubah!');
                res.redirect('/contact');
                res.json(updateContact);
            }
        } catch (error) {
            console.log(error.message);
        }

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
});
