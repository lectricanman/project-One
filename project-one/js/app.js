
var Goal = 1500;
var score = 0;
var time;
var timerId;
var redId;
var butt;
var squares = ['square-one','square-two','square-three','square-four','square-five','square-six']
//makes elements for level 1
/*creates 6 white squares in a grid, adds click events to the square
that either adds to score or subtracts based on red/white */
var makeLevelOne = function() {
  time = 20;
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

//turns random squares red during level 1 and calls makeWhite();
var makeRed = function(){
  var sqrNum = squares[Math.floor(Math.random() * (6 - 0)) + 0];
  $('#'+sqrNum).css('background-color','red');
  window.setTimeout(function(){
    makeWhite(sqrNum);
  }, 800);
}
//turns squares white
var makeWhite = function(sqrNum){
   $('#'+sqrNum).css('background-color','white');
 }
 //displays the score
var displayScore = function(){
  $('#player-score').text('score: '+score);
}

//calling functions


////////////////////
/* this function automates the makeRed() function every
half second and calls setTimer*/
var playLevelOne = function(){
  redId=window.setInterval(function(){
    makeRed();
  },500);
  window.setTimeout(function(){
    setTimer();
  },500);
}
// sets the timer and counts down to 0, removes all squares from the board
// when the timer hits 0
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

//verifies if the player meets the level goal before the time ran out
//and displays an appropriate alert
var checkWin = function(){
  if (score >= Goal){
    console.log('Congraturations');
    alert('GOOD JOB');
    butt.appendTo('.topbar');
  }
  else{
    console.log('try again');
    alert('GOD TRY GUY...');
    butt.appendTo('.topbar');
  }
}

  $('.start').click(function(){
    console.log('clickstart');
    butt = $('button').detach();
    makeLevelOne();
    window.setTimeout(function(){
      playLevelOne();
    },1000);
  });
