const animals = ["dog", "cat", "bird", "fish", "lizard"];

for(i=0 ; i<animals.length ; i++) {
    console.log(`${animals[i]}`);
}

// for iterable
for(let a of animals) {
    console.log(`${a}`);
}

const animals_obj = [
    { name: "dog", species: "canine" },
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" },
  ];

for(let animal of animals_obj) {
    console.log(`${animal['name']}, ${animal['species']}`);
}
  
const cars = ["BMW","Volovo","Mini"];
for(let car of cars) {
    console.log(`${car}`);
}