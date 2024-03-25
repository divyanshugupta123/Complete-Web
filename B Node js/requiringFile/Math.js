// file 2

let math = require('./index.js')
// console.log(math);
// console.log(math.ans2(2,3))

// desturcture object

// keys must be same but we can change it like below line
let {pii : pi ,ans1 , ans2} = require('./index');
console.log(pi);
console.log(ans1(3));