const rl = require('readline').createInterface(process.stdin, process.stdout);
const validator = require('validator');

const greet = (nama, noHP, email) => `Halo, nama saya ${nama}, no HP saya ${noHP}, email saya adalah ${email}`;

rl.question('Masukkan nama anda: ', nama => {
    rl.question('Masukkan nomor HP anda: ', noHP => {
        if (!validator.isMobilePhone(noHP, 'id-ID')) {
            console.log('Format nomor telpon salah, silahkan isi nomor telpon dengan format yang sesuai!');
            rl.close();
            return false;
        }
        rl.question('Masukkan email anda: ', email => {
            if (!validator.isEmail(email)) {
                console.log('Format email salah, silahkan isi email dengan format yang sesuai');
                rl.close();
                return false;
            }

            console.log(greet(nama, noHP, email));
            rl.close();
        });
    });
});