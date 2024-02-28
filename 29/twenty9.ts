//29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
const favourite_Fruits = ["Pineapple", "blueberry", "strawberry", "Grapes"];
// check for cartain fruits using independent if statements
if (favourite_Fruits.includes("Pineapple")) {
    console.log("you really like Pineapple!");
}
if (favourite_Fruits.includes("blueberry")) {
    console.log("you really like blueberry!");
}
if (favourite_Fruits.includes("strawberry")) {
    console.log("you really like strawberries!");
}
if (favourite_Fruits.includes("Grapes")) {
    console.log("you really like Grapes!");
}
if (favourite_Fruits.includes("orange")) {
    console.log("you are really like oranges!");
}
// else {
//     console.log("oranges are not in your favourite fruits list.");
// }