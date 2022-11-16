const fs = require('fs');

const filepath =
    process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

let a = inputs[0];

// if(a<=100 && a>=0) {
//     if(a<=100 && a>=90) {
//         console.log("A");
//     } else if(a<90 && a>=80) {
//         console.log("B");
//     } else if(a<80 && a>=70) {
//         console.log("C");
//     } else if(a<70 && a>=60) {
//         console.log("D");
//     } else{
//         console.log("F");
// }
// }


if(a>0 && a<4001) {
    if(a%100 != 0) {
        if(a%4==0) {
            console.log(1);
        } else {
            console.log(0);
        }
    } else if(a%400 == 0) {
        console.log(1);
    } else {
        console.log(0);
    }
}