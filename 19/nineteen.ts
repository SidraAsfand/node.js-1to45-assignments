// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
let guestArr = ["Noman", "Malaika", "Ahad"];
let canNotattend = "Ahad";
let newGuest = "Zubair";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Noman");
let middleGuest = "Azeem";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Wajeeha");
// console.log(guestArr);
console.log(guestArr.length + " " + "please" + " " + "are invited to dinner");