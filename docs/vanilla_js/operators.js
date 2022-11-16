const fs = require('fs');

const filepath =
    process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

let a = inputs[0];
let b = inputs[1];

let add = inputs[0]+inputs[1];
let minus = inputs[0]-inputs[1];

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
console.log(a%b);