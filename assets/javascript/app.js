$(document).ready(function () {

    setTimeout(ThirtySeconds, 1000 * 10);
    setTimeout(SixtySeconds, 1000 * 20);
    setTimeout(timeUp, 1000 * 30);

    $("#trivia-div").html("<h2>Your first question is</h2>");


    function ThirtySeconds() {

        $("#trivia-div").html("<h2>Your second question is</h2>");

    }

    function SixtySeconds() {

        $("#trivia-div").html("<h2>Your third question is</h2>");

    }


    function timeUp() {

        $("#trivia-div").html("<h2>Time's Up!</h2>");



    }
});