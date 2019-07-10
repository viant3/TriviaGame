var correct = 0;
var incorrect = 0;
var unanswered = 0;

var number = 25;
var intervalId;

var chuckTrivia = [{
    question: "Which world leader \ famous actor helped bring about the fall of communism?",
    choices: ["Mikhail Gorbachev", "Ronald Reagan", "Chuck Norris"],
    answer: 2
},
{
    question: "Who invented the Internet?",
    choices: ["Tim Berners-Lee ", "Chuck Norris", "Al Gore"],
    answer: 1
},
{
    question: "Who actually stopped the 1988 Christmas Eve terrorist attack on Nakatomi Plaza?",
    choices: ["Sgt. Al Powell", "John McClane ", "Chuck Norris"],
    answer: 2
},
{
    question: "If you drove a car at the speed of light and turned on the headlights, what would you see?",
    choices: ["Darkness", "The light from the headlights would illuminate as usual.", "Chuck Norris"],
    answer: 2
}];

//start game and timer
$("#start").on("click", function () {
    $(this).hide();
    $("#chuckFacts").hide();
    $("#chucksChoice").html("Try not to embarass yourself in front of Chuck!")

    // Display initial time countdown
    $("#time-left").html("<h2>Time Remaining: <span class='red'>25</span> Seconds</h2>" + "<br>");

    // Start timer countdown
    runTimer();


    // Question 1
    $("#q1").html("<h3>" + chuckTrivia[0].question + "</h3>");
    $("#a1").html("<input type='radio' name='a1' value='0'>" + "<label>" + chuckTrivia[0].choices[0] + "</label>"
        + "<input type='radio' name='a1' value='1'>" + "<label>" + chuckTrivia[0].choices[1] + "</label>"
        + "<input type='radio' name='a1' value='2'>" + "<label>" + chuckTrivia[0].choices[2] + "</label>"
    );

    // Question 2
    $("#q2").html("<h3>" + chuckTrivia[1].question + "</h3>");
    $("#a2").html("<input type='radio' name='a2' value='0'>" + "<label>" + chuckTrivia[1].choices[0] + "</label>"
        + "<input type='radio' name='a2' value='1'>" + "<label>" + chuckTrivia[1].choices[1] + "</label>"
        + "<input type='radio' name='a2' value='2'>" + "<label>" + chuckTrivia[1].choices[2] + "</label>"
    );

    // Question 3
    $("#q3").html("<h3>" + chuckTrivia[2].question + "</h3>");
    $("#a3").html("<input type='radio' name='a3' value='0'>" + "<label>" + chuckTrivia[2].choices[0] + "</label>"
        + "<input type='radio' name='a3' value='1'>" + "<label>" + chuckTrivia[2].choices[1] + "</label>"
        + "<input type='radio' name='a3' value='2'>" + "<label>" + chuckTrivia[2].choices[2] + "</label>"
    );

    // Question 4
    $("#q4").html("<h3>" + chuckTrivia[3].question + "</h3>");
    $("#a4").html("<input type='radio' name='a4' value='0'>" + "<label>" + chuckTrivia[3].choices[0] + "</label>"
        + "<input type='radio' name='a4' value='1'>" + "<label>" + chuckTrivia[3].choices[1] + "</label>"
        + "<input type='radio' name='a4' value='2'>" + "<label>" + chuckTrivia[3].choices[2] + "</label>"
    );


    $("#finished").html("<button id='finished' class='btn'>FINISHED</button>");

    // Click event run keepScore() and displayResults() when user clicks finished 
    $("#finished").on("click", function () {

        keepScore();
        displayResults();

    });
});

// Timer countdown function
function runTimer() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #time tag
    $("#time-left").html("<h2>Time Remaining: <span class='red'>" + number + "</span> Seconds</h2>" + "<br>");

    if (number === 0) {

        // runTimer stop function to stop timer countdown
        stop();

        keepScore();
        displayResults();

    }
}

function stop() {

    //  Clears intervalId
    clearInterval(intervalId);
}

function displayChuck() {
    if (correct >= 3) {
        $("#theMyth").html("<img src='assets/images/chuckApproves.gif'>");
        $("#chucksChoice").html("NICE JOB!");
    }
    else {
        $("#theMyth").html("<img src='assets/images/chucksMad.gif'>");
        $("#chucksChoice").html("ARE YOU KIDDING?");
    }

}


function displayResults() {

    stop();
    $("#hideMe").hide();
    $("results").html("<h3>FINISHED</h3>");
    $("#correct").html("Correct: " + correct);
    $("#incorrect").html("Incorrect: " + incorrect);
    $("#unanswered").html("Unanswered: " + unanswered + "<br><br>");
    displayChuck();
}

function keepScore() {

    var guess1 = $("input[name='a1']:checked").val();
    var guess2 = $("input[name='a2']:checked").val();
    var guess3 = $("input[name='a3']:checked").val();
    var guess4 = $("input[name='a4']:checked").val();

    if (!guess1) {
        unanswered++;
    }
    else if (guess1 == chuckTrivia[0].answer) {
        correct++;
    }
    else {
        incorrect++;
    }


    if (!guess2) {
        unanswered++;
    }
    else if (guess2 == chuckTrivia[1].answer) {
        correct++;
    }
    else {
        incorrect++;
    }


    if (!guess3) {
        unanswered++;
    }
    else if (guess3 == chuckTrivia[2].answer) {
        correct++;
    }
    else {
        incorrect++;
    }


    if (!guess4) {
        unanswered++;
    }
    else if (guess4 == chuckTrivia[3].answer) {
        correct++;
    }
    else {
        incorrect++;
    }

}