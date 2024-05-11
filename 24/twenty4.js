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
console.log("\n Is city equal to 'SWITZERLAND'? I predict False.");
console.log(city !== 'SWITZERLAND'); // false
// Tests using the lower case function
var fruits1 = 'PINEAPPLE';
console.log("\n Is Fruit in lowercase equal to 'pineapple'? I predict True.");
console.log(fruits1.toLowerCase() === 'pineapple'); // true
console.log("\n Is Fruit in lowercase equal to 'PINEAPPLE'? I predict false.");
console.log(fruits1.toLowerCase() === 'PINEAPPLE'); // true
// Numerical tests
var num1 = 8;
var num2 = 23;
//greater than 
console.log("\n Is num2 greater than num1? I predict True.");
console.log(num2 > num1); // true
//Less than
console.log("\n Is num2 less than num1? I predict false.");
console.log(num2 < num1); // false
//Not Equals  to
console.log("\n Is num1  equal to num2 ? I predict true.");
console.log(num1 !== num2); // true
//Equals to
console.log("\n Is num1  equal to num2 ? I predict False.");
console.log(num1 == num2); // false
//Greater than or equals to!
console.log("\n Is num1  greater than or equals to num2 ? I predict False.");
console.log(num1 >= num2); // false
//Less than or equals to!
console.log("\n Is num1  Less than or equals to num2 ? I predict True.");
console.log(num1 <= num2); // true
// Tests using "and" and "or" operators
var Rainy = true;
var Cool = false;
console.log("\n Is it Rainy and cool? I predict False.");
console.log(Rainy && Cool); // false
console.log("\nIs it Rainy or cool? I predict True.");
console.log(Rainy || Cool); // true
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
var searchFruit = 'banana';
console.log("\n Is ".concat(searchFruit, " in the fruits array? I predict True."));
console.log(fruits.includes(searchFruit)); // true
// Test whether an item is not in an array
var colors = ['red', 'blue', 'green'];
var searchColor = 'red';
console.log("\n Is ".concat(searchColor, " not in the colors array? I predict false."));
console.log(!colors.includes(searchColor)); // False
