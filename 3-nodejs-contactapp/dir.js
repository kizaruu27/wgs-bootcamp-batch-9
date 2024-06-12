const fs = require('fs');

const dirPath = './data';
const path = './data/data.json'

function checkDir() {
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);
    if (!fs.existsSync(path)) fs.writeFileSync(path, '[]', 'utf-8');
}

module.exports = {dirPath, path, checkDir}