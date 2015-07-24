var input = prompt("Say something to your deaf grandma.");

var returnLoud = true;
for (idx in input) {
  if (input[idx] == input[idx].toUpperCase()) {
//    console.log(input[idx] + " " + input[idx].toUpperCase());
    returnLoud = false;
  }
}
if (returnLoud) {
  alert("HUH?! SPEAK UP, SONNY!");
}
else {
  var randNumber = (Math.random() * 100 % 20 + 30).toFixed(0);
  alert("NO, NOT SINCE, 19" + String(randNumber) + "!");
}

