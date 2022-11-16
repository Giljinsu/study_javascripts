let num =5;
if (20>num|| 20<num) {
    console.log("print!");
}

if (20<num) {
    console.log(`20 < ${num}`);
} else if(20>num) {
    console.log(`20 > ${num}`);
} else {
    console.log(`done`);
}

// 삼항 연산자 ternay operator 
let condition = 20<num ? `20 < ${num}` : `done`;
console.log(condition);