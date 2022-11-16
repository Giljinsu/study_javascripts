
function sum(a) {
    let sum =0
    for(let b of a) {
        sum =sum + b;
    }
    return sum;
}

let num = [1,2,3,4,5];
console.log(`${sum(num)}`)