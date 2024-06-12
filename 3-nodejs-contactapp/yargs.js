// const yargs = require('yargs');

// yargs.command({
//     command: 'add',
//     describe: 'Add new contact',
//     builder: {
//         name: {
//             describe: 'Contact name',
//             demandOption: true,
//             type: 'string'
//         },
//         email: {
//             describe: 'Contact email',
//             demandOption: false,
//             type: 'string'
//         },
//         mobile: {
//             describe: 'Contact mobile phone number',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler(argv) {
//         const contact = {
//             name: argv.name,
//             email: argv.email,
//             mobile: argv.mobile
//         }

//         console.log(contact);
//     }
// });

// yargs.parse();