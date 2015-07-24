// fizzBuzz has type Number -> String
var iterFizzBuzz = function (nBound) {
  var output = "";
  for ( var i = 1 ; i <= nBound ; i++ ) {
    output += fizzBuzz(i);
  }
return output;
}
//type Number -> String
var fizzBuzz = function(number) {
    if (number % 15 == 0 ) { return "FizzBuzz\n"; }
    else if( number % 5 == 0 ) { return "Buzz\n"; }
    else if( number % 3 == 0 ) { return "Fizz\n"; }
    else { return String(number + "\n"); }
  }

var input = prompt("What number would you like to fizzbuzz?");
console.log("Your number is: " + fizzBuzz(input));

console.log(iterFizzBuzz(infinity));
