const { Transform } = require('stream');
const toCammelCase = require('../index');
const transform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(toCammelCase(chunk.toString()));
        callback();
    }
});

process.stdin.pipe(transform).pipe(process.stdout);