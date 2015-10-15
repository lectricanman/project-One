var makeLevelOne = function() {
  for(var i = 0;i < 6; i++){
    var square = $('<div></div>');
    var idNum = i.toString();
    square.addClass('square');
    square.attr('id',idNum);
    square.appendTo('.level');
  }
}
