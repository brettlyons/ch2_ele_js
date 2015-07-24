// fizzBuzz has type Number -> String
var fizzBuzz = function (nBound) {
  var output = "";
  for ( var i = 1 ; i <= nBound ; i++ ) {
    ( i % 15 == 0 ) ? ( output += "FizzBuzz\n" ) :
    ( i % 5 == 0 ) ?  ( output += "Buzz\n" ) :
    ( i % 3 == 0 ) ?  ( output += "Fizz\n" ) :
    ( output += String(i + "\n") )
  }
return output;
}
console.log(fizzBuzz(100));
