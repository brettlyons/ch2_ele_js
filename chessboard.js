// makeLine has type Number -> Boolean -> String
var makeLine = function (nBound, offset) {
  var output = "";
  offset = Number(Boolean(offset));
  for ( var i = 0 ; i < nBound ; i++ ) {
    if ( (i+offset) % 2 == 0 ) {
      output += "#";
    }
    else {
      output += " ";
    }
  }
return (output + "\n");
}

// chessBoard has type Number -> String
var chessBoard = function (nBound) {
  var output = "";
  for ( var i = 1 ; i <= nBound ; i++ ) {
    output += makeLine(nBound, (i % 2));
  }
return output;
}
var size = 8;
console.log(chessBoard(size));