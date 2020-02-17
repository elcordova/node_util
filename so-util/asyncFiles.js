const fs = require('fs');
const file = process.argv[2];
if (!file) {
    throw new Error('debes indicar el archivo que deseas leer');
}
fs.readFile(file,(err, content)=>{
    if (err) {
        console.log(err)
        return;
    }
    const lines = content.toString().split("\n").length;
    console.log(lines);
});
    