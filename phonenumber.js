var isValidPhone = function ( input ) {
  return ( input[3] == "-" && input[7] == "-" );
}

var isValidBirthday = function ( input ) {
  return ( input[3] == "/" || input[5] == "/" );
}

var isValidPostalCode = function ( input ) {
  return ( input.length == 5 || ( input.length == 10 && input[5] == "-") );
}

var isValidStateAbbr = function ( input ) {
  return ( input.length == 2 &&  input == input.toUpperCase() );
}

var isValidMarried = function ( input ) {
  return ( input.toUpperCase() == "YES" || input.toUpperCase() == "NO" )
}

var consoleValid = function ( input ) {
  console.log("Your input validated, " + input + "  was well formed.");
}

var consoleInvalid = function ( input ) {
  console.log("Your input: " + input + " was not well formed.");
}

var inputPhone = prompt("Enter a phone number with hyphens:");
var inputBDay = prompt("Enter a birthday, with slashes");
var inputPostCode = prompt("Enter a postcode, with or without a tac");
var inputStateAbbr = prompt("Enter a 2 digit capitalized state code.");
var inputMarried = prompt("Are you married?  Yes, or no? do not abbreviate");

//type is String -> function -> SIDEFFECT
var metaFunction = function (input, validatorFunc) {
  var input = input;
  var valid = validatorFunc ( input );
  valid ? consoleValid ( input ) : consoleInvalid ( input )
}
//this part seems like it would better in a sort of key: value pairing that the metaFunction could iterate over.
metaFunction(inputPhone, isValidPhone);
metaFunction(inputBDay, isValidBirthday);
metaFunction(inputPostCode, isValidPostalCode);
metaFunction(inputStateAbbr, isValidStateAbbr);
metaFunction(inputMarried, isValidMarried);
