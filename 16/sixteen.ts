// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestArr = ["Faizan", "Mehak faisal", "Misbah zubair", "M.Arsalan"];
let canNotcome= guestArr[0];
console.log(canNotcome,"they  not come")
guestArr.splice(0,1,"Asfandyar");
console.log("Good News! we havefound a Bigger Table of DINNER!!");

guestArr.unshift("Saima Akram");
// console.log(guestArr);
guestArr.push("Zeeshan")
let middleIndex = Math.floor(guestArr.length / 2);
guestArr.splice(middleIndex, 0, "Waqar hussain");
// console.log(guestArr);

guestArr.map((item) => console.log(`Dear ${item}, You are corodially invited to a dinner`));