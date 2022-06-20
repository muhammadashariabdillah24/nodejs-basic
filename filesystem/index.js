const fs = require('fs');

// FS Menggunakan Syncronous
// const data = fs.readFileSync('./filesystem/say.txt', 'utf8');
// console.log(data)

/* FS Menggunakan Asynchronous */

const fileReadCallback = (err, data) => {
    if (err) {
        console.log('Gagal Membaca Berkas');
        return;
    } 

    console.log(data);
};

fs.readFile('./filesystem/say.txt', 'UTF-8', fileReadCallback);