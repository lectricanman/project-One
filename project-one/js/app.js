
var levelGoal = [1500,2000,2500];
var currentGoal = 1500;
var Goal = currentGoal;
var score = 0;
var time;
var timerId;
var redId;
var squares = ['square-one','square-two','square-three','square-four','square-five','square-six']
var makeLevelOne = function() {
  time = 30;
  $('#time-remaining').text('Time: '+time);
  $('#level-goal').text('Goal: '+Goal);
  for(var i = 0;i < 6; i++){
    var square = $('<div></div>');
    var sqrNum = squares[i];
    if(i<3){
      square.css('top',125);
      square.css('left',(i*125) +300);
    }
    else if(i>=3){
      var j = i-3;
      square.css('top',250);
      square.css('left',(j*125)+300);
    }
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
  }, 800);
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
  redId=window.setInterval(function(){
    makeRed();
  },500);
  window.setTimeout(function(){
    setTimer();
  },500);
}
var setTimer = function(){
  timerId = window.setInterval(function(){
    time = time -1;
    $('#time-remaining').text('Time: '+time);
    if (time === 0){
      window.clearTimeout(timerId);
      window.clearTimeout(redId);
      $('.square').remove();
      checkWin();
    }
  },1000);
}

var checkWin = function(){
  if (score >= Goal){
    console.log('Congraturations');
    alert('GOOD JOB');
  }
  else{
    console.log('try again');
    alert('GOD TRY GUY...');
  }
}

  $('.start').click(function(){
    console.log('clickstart');
    makeLevelOne();
    window.setTimeout(function(){
      playLevelOne();
    },1000);
  });
