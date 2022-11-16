const {Buffer} = require('buffer');
const buf = Buffer.from('Hello world');

console.log(buf);
console.log(buf.toString('utf-8'));