// accumCrunchs has type Number -> String
var accumCrunchs = function(nBound) {
  var theTriangle = "";
    for ( var i = 1 ; i <= nBound ; i++ ) {
      for ( var j = i ; j > 0; j-- ) {
        theTriangle += "#";
      }
    theTriangle += "\n";
    }
  return theTriangle;
}
console.log(accumCrunchs(8));
