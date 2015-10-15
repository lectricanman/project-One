
var squares = ['first','second','third','fourth','fith','sixth']
var makeLevelOne = function() {
  for(var i = 0;i < 6; i++){
    var square = $('<div></div>');
    var sqrNum = squares[i];
    square.addClass(sqrNum+'square');
    square.attr('id','square');
    square.appendTo('.level');
  }
}
makeLevelOne();
