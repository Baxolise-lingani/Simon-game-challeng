var buttonColour = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userclickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})


$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");

    userclickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);
});




function nextSequence() {

    level++;

    $("#level-title").text("Level " + level);
    
    randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColour[nextSequence];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
   

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}