const nama = 'Bambang Supriadi';
const noHP = `0851234567`;
const greet = (nama, noHP, email) => `Halo, nama saya ${nama}, no HP saya ${noHP}, email saya adalah ${email}`;
// console.log(greet(nama, noHP));

// Core Modules Node JS
// import/inisiasi module file system
const fs = require('fs');
// menuliskan  string ke file secara syncrhonus
fs.writeFileSync('text.txt', greet(nama, noHP));

// membaca atau menampilkan file dengan cara asynchronus
// fs.readFile('text.txt', 'utf-8', (error, data) =>  {
//     if (error) throw error; // ketika terdapat error, maka code di bawahnya tidak akan dieksekusi
//     console.log(data);
// });

// Readline
const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.question('Masukkan nama anda: ', nama => {
    rl.question('Masukkan nomor HP anda: ', noHP => {
        rl.question('Masukkan email anda: ', email => {
            console.log(greet(nama, noHP, email));
            rl.close();
        })
    });
});
