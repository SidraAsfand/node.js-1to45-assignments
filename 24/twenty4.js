// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Tests for equality and inequality with strings
var fruit = 'Grapes';
console.log("Is fruit equal to 'Grapes'? I predict True.");
console.log(fruit === 'Grapes'); // true
var city = 'SWITZERLAND';
console.log("Is city not equal to 'Africa'? I predict True.");
console.log(city !== 'Africa'); // true
// Tests using the lower case function
var fruits1 = 'PINEAPPLE';
console.log("Is Fruit in lowercase equal to 'pineapple'? I predict True.");
console.log(fruits1.toLowerCase() === 'pineapple'); // true
// Numerical tests
var num1 = 8;
var num2 = 23;
console.log("Is num2 greater than num1? I predict True.");
console.log(num2 > num1); // true
console.log("Is num1 divisible by num2  and the reminder will be not equal to 0 ? I predict False.");
console.log(num1 % num2); // false
// Tests using "and" and "or" operators
var Rainy = true;
var Cool = false;
console.log("Is it Rainy and cool? I predict False.");
console.log(Rainy && Cool); // false
console.log("Is it Rainy or cool? I predict True.");
console.log(Rainy || Cool); // true
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
var searchFruit = 'banana';
console.log("Is ".concat(searchFruit, " in the fruits array? I predict True."));
console.log(fruits.includes(searchFruit)); // true
// Test whether an item is not in an array
var colors = ['red', 'blue', 'green'];
var searchColor = 'yellow';
console.log("Is ".concat(searchColor, " not in the colors array? I predict False."));
console.log(!colors.includes(searchColor)); // False
