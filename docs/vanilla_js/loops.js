const animals = ["dog", "cat", "bird", "fish", "lizard"];

//normal
for(i=0 ; i<animals.length ; i++) {
    console.log(`${animals[i]}`);
}

// for iterable
  
const cars = ["BMW","Volovo","Mini"];
for(let car of cars) {
    console.log(`${car}`);
}

cars.forEach(car => {
    console.log(`${car}`);
})

//for each
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
//element => console.log(element)가 function

// Arrow Function
let arrowFunction = (element) => {
    console.log(element)
}
array1.forEach(arrowFunction);
// 파라미터가 하나일때 ()생략 return값이 하나이면{}가 생략됨
// let arrowFunction = element => console.log(element);

// array1.forEach(arrowFunction); 즉 이렇게 됨
// 보통 이렇게 씀 array1.forEach(element => console.log(element));

// Normal Function
function normalFunction(element) {
    console.log(element);
}
array1.forEach(normalFunction);
