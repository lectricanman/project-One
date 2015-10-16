
var levelGoal = [1500,2000,2500];
var currentGoal = 1500;
var Goal = currentGoal;
var score = 0;
var squares = ['square-one','square-two','square-three','square-four','square-five','square-six']
var makeLevelOne = function() {
  for(var i = 0;i < 6; i++){
    var square = $('<div></div>');
    var sqrNum = squares[i];
    square.addClass('square');
    square.attr('id',sqrNum);
    square.appendTo('.level');
    $('#'+sqrNum).click(function(){
      if(($(this).css('background-color')) === 'rgb(255, 0, 0)'){
        $(this).css('background-color','white');
        console.log('up');
        score+= 100;
        displayScore();
        console.log(score);
      }
       else if(($(this).css('background-color')) ==='rgb(255, 255, 255)'){
         score = score - 100;
         displayScore();
         console.log(score);
       }
      console.log('click');
    });
  }
}
var makeRed = function(){
  var sqrNum = squares[Math.floor(Math.random() * (6 - 0)) + 0];
  $('#'+sqrNum).css('background-color','red');
  window.setTimeout(function(){
    makeWhite(sqrNum);
  }, 700);
}
var makeWhite = function(sqrNum){
   $('#'+sqrNum).css('background-color','white');
 }
var displayScore = function(){
  $('#player-score').text('score: '+score);
}

//calling functions


////////////////////
var playLevelOne = function(){
  window.setInterval(function(){
    makeRed();
  },500);
}


  $('.start').click(function(){
    console.log('clickstart');
    makeLevelOne();
    window.setTimeout(function(){
      playLevelOne();
    },1000);
  });
