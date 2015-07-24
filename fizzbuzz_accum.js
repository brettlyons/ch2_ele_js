var fizzBuzz = function(input) {
  var output = "";
  if (input % 5 == 0 ) {
    ouput +="Fizz" ;
  }
  if (input % 3 == 0) {
    output += "Buzz";
  }
return (output || input);
}

