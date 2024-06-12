const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const validator = require('validator');

const question = (ask) => {
    return new Promise((resolve, rejects) => {
        rl.question(ask, answer => {
            resolve(answer);
        })
    }) 
}

const saveContact = (id, nama, noHP, email, path) => {
    const data = {
        id,
        nama, 
        noHP, 
        email
    }

    const file = fs.readFileSync(path, 'utf-8');
    const contacts = JSON.parse(file);
    contacts.push(data);

    fs.writeFileSync(path, JSON.stringify(contacts, null, 2));
    rl.close();
}

module.exports = {saveContact, question}