// 문제
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

// 출력
// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다
const fs = require('fs');

const filepath =
    process.platform === 'linux' ? "/dev/stdin" : "docs/vanilla_js/input.txt";
    // let inputs = fs.readFileSync(filepath).toString().trim().split(' ').map(Number);
    // let a= inputs.length;
    // let b = inputs;
let inputs = fs.readFileSync(filepath).toString().trim().split(',');
let a = parseInt(inputs[0]);
let b = inputs[1].split(' ').map(Number);

let num = {min : 1000001, max : -10000001 };

for(let i=0 ; i<a ; i++) {
    if(num['min']>b[i]){
        num['min'] = b[i];
    }
   
    if(num['max']<b[i]) {
        num['max'] = b[i];
    }
}


console.log(`${num['min']} ${num['max']}`);