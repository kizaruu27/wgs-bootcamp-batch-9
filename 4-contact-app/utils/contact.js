const fs = require('fs');
const {pool} = require('../db');

const dataPath = './data/data.json';
const path = './data';

if (!fs.existsSync(path)) fs.mkdirSync(path);
if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, '[]', 'utf-8');

const loadContacts = (contacts) => {
    saveContact(contacts);
    return contacts;
}

const loadLocalContacts = () => {
    const file = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(file);

    return contacts;
}

const saveContact = (newContact) => {
    fs.writeFileSync(dataPath, JSON.stringify(newContact, null, 2));
}

const addContact = (newContact) => {
    const contacts = loadContacts();
    contacts.push(newContact);
    saveContact(contacts);
}

const generateID = (id) => {
    const contacts = loadContacts();
    let idNew = parseInt(id);

    contacts.forEach(contact => {
        const contactID = parseInt(contact.id);
        if (contactID === idNew)  idNew += 1;
    });

    return idNew;
}

const findContact = (id) => {
    const contacts = loadLocalContacts();
    const targetContact = contacts.find(contact => contact.id === id);

    return targetContact;
}

const deleteContact = (id) => {
    const contacts = loadContacts();
    const newContact = contacts.filter(contact => contact.id !== id);

    saveContact(newContact);
}

const updateContact = (id, newContact) => {
    const contacts = loadContacts();
    contacts.map(contact => {
        if (contact.id === id) {
            contact.nama = newContact.nama;
            contact.email = newContact.email;
            contact.noHP = newContact.noHP;
        }
    })
    saveContact(contacts);
}

// Query Process
const queryProcess = async (query, data) => {
    const fetchContacts = await pool.query(query, data);
    return fetchContacts;
}

module.exports = {loadContacts, addContact, generateID, findContact, deleteContact, updateContact, queryProcess}

