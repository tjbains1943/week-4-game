

var Goal;
var Wins = 0;
var Losses = 0;
var button1;
var button2;
var button3;
var button4;
var Score;
var Count = 0;


$("#Wins").html("Wins:" + Wins);
$("#Losses").html("Losses:" + Losses);


function goal() {
	 Goal = Math.floor((Math.random() * 101) + 19);
	 $("#Goal").text(Goal);
}

function score() {
	 Count = 0;
	 $("#totalScore").html(Count);
	 button1 = Math.floor((Math.random() * 12) + 1);
	 button2 = Math.floor((Math.random() * 12) + 1);
	 button3 = Math.floor((Math.random() * 12) + 1);
	 button4 = Math.floor((Math.random() * 12) + 1);
	$("#first").val(button1);
	$("#second").val(button2);
	$("#third").val(button3);
	$("#fourth").val(button4);
	
	
}

goal();
score();
 $('#first').on('click', function(){
 	Count += button1;
    $("#totalScore").html(Count);
    checkWin();
  })  
 $('#second').on('click', function(){
 	Count += button2;
    $("#totalScore").html(Count);
    checkWin();
  })  
 $('#third').on('click', function(){
 	Count += button3;
    $("#totalScore").html(Count);
    checkWin();
  })  
 $('#fourth').on('click', function(){
 	Count += button4;
    $("#totalScore").html(Count);
    checkWin();
  })  

 function checkWin() {
 	if(Count === Goal) {
 		alert("You win, but still");
 		Wins++;
 		$("#Wins").html("Wins:" + Wins);
 		score();
 		goal();

 	}

 	else if(Count > Goal) {
 		alert("You lost, like you can't count");
 		Losses++;
 		$("#Losses").html("Losses:" + Losses);
 		score();
 		goal();
 	}

 	else {}
 }
