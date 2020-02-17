const fs = require('fs');
fs.mkdir('platzi/escuelaks/node/',{recursive: true}, err=>{
    if (err) {
        console.log(err);
    }
});