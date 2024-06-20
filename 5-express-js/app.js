const express = require('express');
const expressLayout = require('express-ejs-layouts');
const validator = require('validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const {check, validationResult} = require('express-validator');

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
app.get('/contact', (req, res) => {
    const contacts = loadContacts();

    res.render('contact', {
        title: 'Contact List',
        contacts,
        msg: req.flash('msg'),
        layout: 'layouts/main-layouts'
    });
});

// Halaman tambah contact
app.get('/contact/add', (req, res) => {
    const contacts = loadContacts();
    const id = generateID(contacts.length);

    res.render('contact-add', {
        id,
        title: 'Form Tambah Contact',
        layout: 'layouts/main-layouts'
    })
});

// Proses tambah contact
app.post('/contact', 
    [
        check('email', 'Email tidak  valid!').isEmail(),
        check('noHP', 'No HP tidak valid!').isMobilePhone('id-ID')
    ],
    (req, res) => {
    const contacts = loadContacts();
    const id = generateID(contacts.length);

    const newContact = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.render('contact-add', {
            id,
            title: 'Form Tambah Contact',
            errors: errors.array(),
            layout: 'layouts/main-layouts'
        })
    } else {
        addContact(newContact);
        req.flash('msg', `${newContact.nama} telah ditambahkan!`);
        res.redirect('/contact');
    }
});

// Halaman detail
app.get('/contact/detail/:id', (req, res) => {
    const contact = findContact(req.params.id);

    res.render('contact-detail', {
        title: 'Contact Detail',
        contact,
        layout: 'layouts/main-layouts'
    })
});

// Delete contact
app.get('/contact/delete/:id', (req, res) => {
    const deletedContact = findContact(req.params.id);
    deleteContact(req.params.id);
    req.flash('msg', `${deletedContact.nama} berhasil  dihapus!`);
    res.redirect('/contact');
});

// Edit contact
app.get('/contact/edit/:id', (req, res) => {
    const contact = findContact(req.params.id);

    res.render('contact-edit', {
        title: 'Form Edit Contact',
        contact,
        layout: 'layouts/main-layouts'
    })
});

// Proses edit contact
app.post('/contact/update/:id', 
    [
        check('email', 'Email tidak  valid!').isEmail(),
        check('noHP', 'No HP tidak valid!').isMobilePhone('id-ID')
    ],
    (req, res) => {
    const id = req.params.id;
    const newContact =  req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.render('contact-edit', {
            id,
            title: 'Form Edit Contact',
            errors: errors.array(),
            contact: newContact,
            layout: 'layouts/main-layouts'
        })
    } else {
        updateContact(id, newContact);
        req.flash('msg', 'Data berhasil diubah!');
        res.redirect('/contact');
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
})





// const http = require('http');
// const fs = require('fs');
// const port = 3000;

// http
//     .createServer((req, res) => {
//         const url = req.url;
//         console.log(url);

//         res.writeHead(200, {
//             'Content-Type' : 'text/html'
//         });

//         switch (url) {
//             case '/about':
//                 renderFile(res, './about.html');
//                 break;
//             case '/contact': 
//                 renderFile(res, './contact.html');
//                 break;
//             default:
//                 renderFile(res, './index.html');
//                 break;
//         }
//     })
//     .listen(port, () => {
//         console.log(`Server is listening to port http://localhost:${port}`);
//     });

// const renderFile = (res, dir) => {
//     fs.readFile(dir, (error, data) => {
//         if (error) {
//             res.writeHead(404);
//             res.write('Error: Page Not Found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// }
