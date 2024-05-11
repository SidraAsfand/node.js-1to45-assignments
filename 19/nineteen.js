// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
var guestArr = ["Noman", "Malaika", "Ahad"];
var canNotattend = "Ahad";
var newGuest = "Zubair";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Noman");
var middleGuest = "Azeem";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Wajeeha");
// console.log(guestArr);
console.log("we are inviting total" + " " + guestArr.length + " " + "Guests for dinner");
