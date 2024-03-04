// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function orderSandwich(reoder: string[]): void{
    console.log(`you order a sandwich with ${reoder} on it. `);
}
orderSandwich(['pakistan' , 'tommato', 'mayo']);
orderSandwich(['ham', 'cheese']);
orderSandwich(['indian', 'jelly']);