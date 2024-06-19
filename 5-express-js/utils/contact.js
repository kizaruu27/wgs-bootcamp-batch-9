const fs = require('fs');

const dataPath = './data/data.json';
const path = './data';

if (!fs.existsSync(path)) fs.mkdirSync(path);
if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, '[]', 'utf-8');

const loadContacts = () => {
    const file = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(file);

    return contacts;
}

module.exports = {loadContacts}

