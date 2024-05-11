// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface Car{
    manufacturer:string,
    modelName:  string,
    [key:string]: any
}
function createCar(manufacturer:any, modelName :any, ...options: any[]) {
    let car:Car = {
        manufacturer:manufacturer,
        modelName:modelName,
        
    };
    options.forEach(name=>{
        let [key,value]=name.split(":");
        car[key.trim()]= value.trim();
    })
    
    return car;
}
let carInfo = createCar("Ford", "Raptor", "color: black","sunRoof:True","year:2024");
console.log(carInfo);