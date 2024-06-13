const fs = require('fs');
const validator = require('validator');

const dirPath = './data';
const path = './data/data.json'

if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);
if (!fs.existsSync(path)) fs.writeFileSync(path, '[]', 'utf-8');

const loadContacts = () => {
    const file = fs.readFileSync(path, 'utf-8');
    const data = JSON.parse(file);

    return data;
}

const saveContact = (nama, noHP, email) => {
    if (!validator.isMobilePhone(noHP, 'id-ID')) {
        console.log('Format nomor telpon salah');
        return false;
    }

    if (email && !validator.isEmail(email)) {
        console.log('Format email salah!');
        return false;
    }

    const contacts = loadContacts();

    const id = () => {
        let idTmp = contacts.length + 1;
        contacts.forEach(contact => {
            if (idTmp === contact.id) idTmp += 1;
        });
        return idTmp;
    }

    const data = {
        id: id(),
        nama, 
        noHP, 
        email
    }

    contacts.push(data);
    fs.writeFileSync(path, JSON.stringify(contacts, null, 2));
    console.log('Contact berhasil di tambah');
}

const showContact = () => {
    const contacts = loadContacts();
    contacts.forEach((contact, key) => {
        console.log(`${key + 1}: `);
        console.log(`Nama: ${contact.nama}`);
        console.log(`No Hp: ${contact.noHP}\n`);
    })
}

const showDetail = (id) => {
    const contacts = loadContacts();
    const contact = contacts.find(contact => contact.id === id);

    if (!contact) {
        console.log('Contact tidak ditemukan!');
        return false;
    }

    console.log(`Nama: ${contact.nama}`);
    console.log(`No HP: ${contact.noHP}`);
    if (contact.email) console.log(`Email: ${contact.email}`);
}

const deleteContact = (id) => {
    const contacts = loadContacts();
    const newContact = contacts.filter(contact => contact.id !== id);
    const targetContact = contacts.find(contact => contact.id === id);

    if (!targetContact) {
        console.log('ID tidak ditemukan');
        return false;
    }

    fs.writeFileSync(path, JSON.stringify(newContact, null, 2));
    console.log('Data berhasil dihapus');
}

const updateContactData = (id, newName, newPhone, newEmail) => {
    const contacts = loadContacts();
    const targetContacts = contacts.find(contact => contact.id === id);

    if (!targetContacts) {
        console.log('ID tidak ditemukan!');
        return false;
    }

    contacts.map(contact => {
        if (contact.id === id) {
            if (newName) contact.nama = newName;
            if (newPhone) contact.noHP = newPhone;
            if (newEmail) contact.email = newEmail;
        } 
    })

    fs.writeFileSync(path, JSON.stringify(contacts, null, 2));
    console.log('Data berhasil di update!');
}

const deleteAllContact = () => {
    const contacts = loadContacts();
    contacts.length = 0;
    fs.writeFileSync(path, JSON.stringify(contacts, null, 2));

    console.log('Semua contact telah dihapus');
}

module.exports = {saveContact, showContact, showDetail, deleteContact, updateContactData, deleteAllContact}