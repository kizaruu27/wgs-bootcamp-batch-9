const contacts = require('./contacts');
const dir = require('./dir');
const yargs = require('yargs');
const fs = require('fs');
const rl = require('readline').createInterface(process.stdin, process.stdout);

dir.checkDir();

const file = fs.readFileSync(dir.path, 'utf-8');
const data = JSON.parse(file);

function writeFileToJSON(data) {
    fs.writeFileSync(dir.path, JSON.stringify(data, null, 2));
}

module.exports = {data};

const main = () => {
    // const nama = await contacts.question('Masukkan nama anda: ');
    // const noHP = await contacts.question('Masukkan no HP anda: ');
    // const email = await contacts.question('Masukkan email anda: ');

    yargs.command({
        command: 'add',
        describe: 'Add new contact',
        builder: {
            name: {
                describe: 'Contact name',
                demandOption: true,
                type: 'string'
            },
            email: {
                describe: 'Contact email',
                demandOption: false,
                type: 'string'
            },
            mobile: {
                describe: 'Contact mobile phone number',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            const contact = {
                name: argv.name,
                email: argv.email,
                mobile: argv.mobile
            }
    
            console.log(contact);
            const id = data.length;
            contacts.saveContact(id, contact.name, contact.mobile, contact.email, dir.path);
            console.log('Data telah diterima!');
        }
    });

    yargs.command({
        command: 'read',
        describe: 'Read contact data',
        handler() {
            console.log(data);
            rl.close();
        }
    });

    yargs.command({
        command: 'read-detail',
        describe:'Read the detail of certain data',
        builder: {
            id: {
                describe: 'Contact id',
                demandOption: true,
                type:'number'
            }
        },
        handler(argv) {
            for (let contact of data) {
                if (contact.id === argv.id) console.log(contact);
            }

            rl.close();
        }
    })

    yargs.command({
        command: 'delete',
        describe: 'Delete a data',
        builder: {
            id: {
                describe: 'Contact id',
                demandOption: true,
                type: 'number'
            }
        },
        handler(argv) {
            const newData = data.filter(item => item.id !== argv.id);
            writeFileToJSON(newData);
            console.log(newData);
            rl.close();
        }
    });

    yargs.command({
        command: 'update',
        describe:'Update contact data',
        builder: {
            id: {
                describe: 'Contact id',
                demandOption: true,
                type: 'number'
            },
            newName: {
                describe: 'Modified contact name',
                demandOption: false,
                type: 'string'
            },
            newEmail: {
                describe: 'Modified email',
                demandOption: false,
                type: 'string'
            },
            newPhone: {
                describe: 'Modified phone number',
                demandOption: false,
                type: 'string'
            }
        },
        handler(argv) {
            for (let contact of data) {
                if (contact.id === argv.id) {
                    if (argv.newName) contact.nama = argv.newName;
                    if (argv.newPhone) contact.noHP = argv.newPhone;
                    if (argv.newEmail) contact.email = argv.newEmail;
                } 
            }
            writeFileToJSON(data);
            console.log(data);
            rl.close();
        }
    });
    
    yargs.parse();

}

main();
