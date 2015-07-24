// fizzBuzz has type Number -> String
var fizzBuzz = function (nBound) {
  var output = "";
  for ( var i = 1 ; i <= nBound ; i++ ) {
    if ( i % 15 == 0 ) { output += "FizzBuzz\n"; }
    else if ( i % 5 == 0 ) { output += "Buzz\n"; }
    else if ( i % 3 == 0 ) { output += "Fizz\n"; }
    else { output += String(i + "\n"); }
  }
return output;
}
console.log(fizzBuzz(100));
