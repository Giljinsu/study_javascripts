// function name(parameter1, parameter2, parameter3) {
// code to be executed
// return
// }

{
    let sum_number = 1+3;
    sum_number = 3 + 5;
    sum_number = 6 + 8;
    let sum_function = sum(1,2);
    console.log();
}

function sum(item_first, item_second) {
    return item_first+item_second;
}

//anonymouse Fuction
let calculateSum = function (item_first, item_second) {
    return item_first+item_second;
};


// Arrow Function
let calculateSumSecond = (item_first, item_second) => {
    return item_first+item_second;
};
{
    console.log(`${calculateSumSecond(7,8)}`);
}

// rest parameters
function printRestParams(...args) {
    let restParam = (arg) => {
        //만약 리스트가 들어오면 typeof로 구분하자 
    console.log(`arg : ${arg}`)
};

    args.forEach(restParam);
}

{
    printRestParams(2,4,5);
    printRestParams(2,4,5,6,7);
    printRestParams(2,4,5,6,7,8,9);
}