const {saveContact, showContact, showDetail, deleteContact, updateContactData, deleteAllContact} = require('./contacts');
const yargs = require('yargs');

const main = () => {
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
            saveContact(argv.name,argv.mobile, argv.email);
        }
    }).demandCommand();

    yargs.command({
        command: 'list',
        describe: 'Show contact data',
        handler() {
            showContact();
        }
    });

    yargs.command({
        command: 'detail',
        describe:'Read the detail of certain data',
        builder: {
            id: {
                describe: 'Contact id',
                demandOption: true,
                type:'number'
            }
        },
        handler(argv) {
            showDetail(argv.id);
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
            deleteContact(argv.id);
        }
    });

    yargs.command({
        command: 'delete-all',
        describe: 'Delete all contact data',
        handler() {
            deleteAllContact();
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
            updateContactData(argv.id, argv.newName, argv.newPhone, argv.newEmail);
        }
    });
    
    yargs.parse();

}

main();
