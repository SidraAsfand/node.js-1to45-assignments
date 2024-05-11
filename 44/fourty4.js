// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function orderSandwich() {
    var reoder = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        reoder[_i] = arguments[_i];
    }
    console.log("\n making a sandwitch  with  following items:\n ");
    reoder.forEach(function (singleItem) { return console.log(singleItem); });
}
orderSandwich('pakistan', 'tommato', 'mayo');
orderSandwich('ham', 'cheese');
orderSandwich('indian', 'jelly');
