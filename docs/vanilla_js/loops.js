const animals = ["dog", "cat", "bird", "fish", "lizard"];

for(i=0 ; i<animals.length ; i++) {
    console.log(`${animals[i]}`);
}

// for iterable
for(let a of animals) {
    console.log(`${a}`);
}