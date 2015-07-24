var input = prompt("Enter the phrase to test for palinedrome status.");

//type String -> String
var reverse = function ( input ) {
  var output = "";
  for ( var i = input.length ; i >= 0 ; i--) {
    output += input.charAt(i);
  }
  return output;
}
var reversedInput = reverse( input.toUpperCase() );

console.log("This is a " + (input.toUpperCase() == reversedInput) + " palindrome");
