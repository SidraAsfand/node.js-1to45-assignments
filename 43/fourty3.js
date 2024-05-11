var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "THE GREAT ".concat(name); });
}
var magicians_name = ['Naeem', 'Hussain', 'Faheem', 'Shahmeer', 'Shehzad', 'Irfan'];
var copy_magician = __spreadArray([], magicians_name, true);
var copy_great = make_great(copy_magician);
//original  array
console.log("Original array \n");
show_magicians(magicians_name);
//coppied array
console.log("coppied array \n");
show_magicians(copy_great);
