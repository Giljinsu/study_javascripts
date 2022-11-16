let fruits = ["apple", "banana", "orange", "melon"];
let numbers = [1,2,3,4,5];

//배열초기화
let fruits_init = new Array();
fruits_init = [];

// object == HashMap
let objects = {name:"Tom", age:"4"}

// 믹스 가능하긴 함
let mixins_first = [1,2,3,"apple",4,"mellon"];
let mixins_second = [1,2,3,"apple",{name: "Tom", age : 4}];
let mixins_third = [1,2,3,"banana",objects];

let mixins_fourth = [fruits,numbers]

const mixins_array = [
    ["apple", "banana"],
    ["orange", "mellon"],
    ["berry", "strawberry"],
  ];
  

console.log();