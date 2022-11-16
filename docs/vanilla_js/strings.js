// operate number type and string
let number_first = 3;
let string_second = "5";

console.log(number_first + string_second); // 이런식으로 붙긴하는데 + 말고 - *등 들은 숫자로 계산이 잘된다.
//recommend this way
let concate_string = `${number_first}${string_second}`

string_second = "A";
console.log(number_first + string_second); // 이러면 - * /등 불가

//Strings
let animal = "Tiger";
console.log(`${animal}`);

let sentance = "  5 2 6  ";
let trims = sentance.trim();
let splits = trims.split(" ");
let maps = splits.map(Number); // 
console.log(maps[0] + maps[1] + maps[2]);

let num = sentance.trim().split(" ").map(Number); // 체인펑션 chain function
console.log(num[0]+num[1]+num[2]);