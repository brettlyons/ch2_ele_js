var countBs = function ( inputString ) {
 return countChar( inputString, 'B');
}

var countChar = function ( inputString, searchChar ) {
  var accumChar = 0;
  for ( c in inputString ) {
    c = inputString[c];
    if ( c === searchChar ) { accumChar++ }
  }
 return accumChar;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
