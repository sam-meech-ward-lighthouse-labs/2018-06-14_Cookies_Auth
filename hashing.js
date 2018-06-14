const bcrypt = require('bcrypt');

const saltRounds = 13;
const myPlaintextPassword = 'bacon';
const someOtherPlaintextPassword = 'not_bacon';

const hashed = bcrypt.hashSync(myPlaintextPassword, saltRounds);

console.log(myPlaintextPassword, hashed);

console.log(bcrypt.compareSync(myPlaintextPassword, hashed));
console.log(bcrypt.compareSync(someOtherPlaintextPassword, hashed));
