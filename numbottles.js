var bbeer = "bottles of beer "
var wall = "on the wall "
var passit = "take 1 down, pass it around. "
var input = Number(prompt("How many bottles?  99 or less.")) || 99;
input > 99 ? input = 99 : input = input;
for (var i = input ; i > 1 ; i-- ){
  console.log(String(i+ " "+ bbeer + wall + i + bbeer + passit + (i-1) + " " + bbeer + wall));
}
console.log("1 botle of beer, on the wall, 1 bottle of beer, take one down, pass it around, zero bottles of beer on the wall.");
console.log("No more bottles of beer.");
