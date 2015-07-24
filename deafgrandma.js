var input = prompt("Say something to your deaf grandma.");


output = ""
for (idx in input) {
  if (input[idx] = input[idx].toUpperCase()) {
    returnLoud = false;
  }
  else {
    returnLoud = true;
  }
}
if (returnLoud) {
  alert("HUH?! SPEAK UP, SONNY!");
}
else {
  var randNumber = (Math.random() * 100 % 20 + 30).toFixed(0);
  alert("NO, NOT SINCE, 19" + String(randNumber) + "!");
}

