const ponsel = require('validator-ponsel');

const nomorTelkomsel = ponsel('0851 5642 7188');
console.log(nomorTelkomsel);

const phoneNumber = ponsel('0896 1234 12441');
console.log(phoneNumber);

const nomorIndosat = ponsel('0855 1234 5678');
console.log(nomorIndosat);