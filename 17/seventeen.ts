//17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
console.log("I can invite only two people to dinner");
while (guestArr.length > 2) {
    let removeGuest = guestArr.pop();
    console.log(`Sorry, ${removeGuest}, I can  not invited to the dinner`);
}
guestArr.map((item) => console.log(`Dear ${item}, you are invited to a dinner`));
guestArr.pop();
guestArr.pop();
console.log("empty list",guestArr);