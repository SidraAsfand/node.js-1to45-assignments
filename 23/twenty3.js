// 23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // true
console.log("Is car == 'Parado'? I predict False.");
console.log(car == 'Parado'); // false
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // true
console.log("Is car === 'Marina'? I predict False.");
console.log(car === 'Marina'); // false
console.log("Is car !== 'Bolan'? I predict True.");
console.log(car !== 'Bolan'); // true
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // false
console.log("Is car.endsWith('u')? I predict True.");
console.log(car.endsWith('u')); // true
console.log("Is car.startsWith('b')? I predict False.");
console.log(car.startsWith('B')); // False
console.log("Is car.includes('bar')? I predict True.");
console.log(car.includes('bar')); // true
console.log("Is car.length > 6? I predict False.");
console.log(car.length > 6); // False
