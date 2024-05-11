// Q21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

type user={
    fName: string;
    Lname: string;
    age:  number;
    hobbies:  string[];
    salary:number;
}
let user:user = {
    fName: "Sidra",
    Lname: "Asfand",
    age: 24,
    hobbies: ["study", "cooking", "long drive"],
    salary:  30000
};

console.log(user);
//node console.log(user.salary());