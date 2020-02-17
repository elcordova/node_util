const { Writable } = require('stream');
const toCammelCase = require('../index');
const writableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(toCammelCase(chunk.toString()));
        callback();
    }
})

process.stdin.pipe(writableStream);