const { Duplex } = require('stream');
const duplexStream = new Duplex({
    write(chunk, encoding, callback){
        console.log(chunk.toString());
        callback();
    },
    read() {
        if (this.currentCharCode > 90) {
            this.push(null);
            return;
        }
        setTimeout(() => {
            this.push(String.fromCharCode(this.currentCharCode++));            
        }, 1000);
    }
});

duplexStream.currentCharCode = 65;
process.stdin.pipe(duplexStream).pipe(process.stdout)
