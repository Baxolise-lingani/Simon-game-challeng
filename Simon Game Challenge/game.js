var buttonColour = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userclickedPattern = [];


$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");

    userclickedPattern.push(userChosenColour);
});


function nextSequence() {
    randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColour[nextSequence];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
   

}

