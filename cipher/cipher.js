const crypto = require('crypto');
const algorithm = 'aes-256-ctr';

const originalText = 'My name is Taichi';
const password = '123456';

console.log(`Original text: ${originalText}`);

const cipher = crypto.createCipher(algorithm, password);
let cipheredText = cipher.update(originalText, 'utf8', 'hex');
cipheredText += cipher.final('hex');

console.log(`Ciphered text: ${cipheredText}`);

const decipher = crypto.createDecipher(algorithm, password);
let dec = decipher.update(cipheredText, 'hex', 'utf8');
dec += decipher.final('utf8');

console.log(`Deciphered text: ${dec}`);