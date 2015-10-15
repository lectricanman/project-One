
var Goal = 1000;
var score = 0;
var squares = ['first-square','second-square','third-square','fourth-square','fith-square','sixth-square']
var makeLevelOne = function() {
  for(var i = 0;i < 6; i++){
    var square = $('<div></div>');
    var sqrNum = squares[i];
    square.addClass(sqrNum);
    square.attr('id','square');
    square.appendTo('.level');
    $('.'+sqrNum).click(function(){
      if(($(this).css('background-color')) === 'rgb(255, 0, 0)'){
        $(this).css('background-color','white');
        console.log('up');
        score+= 100;
        console.log(score);
      }
       else if(($(this).css('background-color')) ==='rgb(255, 255, 255)'){
         score = score - 100;
         console.log(score);
       }
      console.log('click');
    });
  }
}


var makeRed = function(){
  var sqrNum = squares[Math.floor(Math.random() * (6 - 0)) + 0];
  $('.'+sqrNum).css('background-color','red');
}


//calling functions
makeLevelOne();
//addClick();
