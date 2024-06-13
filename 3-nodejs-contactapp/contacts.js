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

    if (!validator.isEmail(email)) {
        console.log('Format email salah!');
        return false;
    }

    const contacts = loadContacts();
    const data = {
        id: contacts.length,
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
        console.log(`Email: ${contact.email}`);
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

    fs.writeFileSync(path, JSON.stringify(newContact, null, 2));
    console.log('Data berhasil dihapus');
}

const updateContactData = (id, newName, newPhone, newEmail) => {
    const contacts = loadContacts();
    
    contacts.forEach(contact => {
        if (contact.id === id) {
            if (newName) contact.nama = newName;
            if (newPhone) contact.noHP = newPhone;
            if (newEmail) contact.email = newEmail;
        }
    })

    fs.writeFileSync(path, JSON.stringify(contacts, null, 2));
    console.log('Data berhasil di update!');
}

module.exports = {saveContact, showContact, showDetail, deleteContact, updateContactData}