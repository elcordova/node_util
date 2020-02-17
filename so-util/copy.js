const fs = require('fs');
fs.copyFile('lorem.txt', 'lorem2.txt', err => {
    if (err) {
        console.log(err);
    }
    console.log('archivo lorem.txt copiado como lorem2.txt');
});