var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern= [];

var started=false;
var level=0;


$(document).on("keypress",function(){
  if(!started){
$("#level-title").text("Level "+level);
newSequence();
started=true;


  }



} );


function playSound(name){
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}
$(".btn").on("click",function(){
  var chosenColor=$(this).attr("id");
  userClickedPattern.push(chosenColor);
  playSound(chosenColor);
animatePress(chosenColor);
currentAnswer((userClickedPattern.length)-1);
});


function newSequence() {
  userClickedPattern =[];
  level++;
  $("#level-title").text("Level "+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);


}
function currentAnswer(currentLevel){
if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
console.log("success");
if (userClickedPattern.length === gamePattern.length){


  setTimeout(function () {
    newSequence();
  }, 1000);

}}
else{
$("h1").text("Game Over, Press Any Key to Restart");
playSound("wrong");
$("body").addClass("game-over");
setTimeout(function () {
  $("body").removeClass("game-over");
}, 200);
startOver();

}
}
function startOver(){
  gamePattern=[];
  started=false;
  level=0;
}


function animatePress(currentColor){

  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    }, 100);

}
