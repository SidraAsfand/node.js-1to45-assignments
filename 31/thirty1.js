//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
var userNames = ["Haniya", "Raniya", "Ahmed", "alisha"];
userNames = [];
if (userNames.length === 0) {
    console.log("we need to find some users!");
}
else {
    for (var i = 0; i <= userNames.length; i++) {
        console.log(userNames, "  would you like to see a status report!?");
    }
}
