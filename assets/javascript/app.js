var number = 30;

var intervalId;

var correct = 0;
var incorrect = 0;
var unanswered = 0;

// array to hold trivia questions, choices, and the correct choice
var trivQuest = [{
    question: "why does Bruno bark so much?",
    choices: ["a1", "cause he's a boy", "a3"],
    answer: 1
},
{
    question: "q2",
    choices: ["a1", "a2", "a3"],
    answer: 0
},
{
    question: "q3",
    choices: ["a1", "a2", "a3"],
    answer: 2
},
{
    question: "q4",
    choices: ["a1", "a2", "a3"],
    answer: 1
},
{
    question: "q5",
    choices: ["a1", "a2", "a3"],
    answer: 1
}];

//start game and timer
$("#start").on("click", function() {
    $(this).hide();

    // Display initial time countdown
    $("#time-left").html("<h2>Time Remaining: 30 Seconds</h2>" + "<br>");

    // Start timer countdown
    runTimer();
   

    // Question 1
    $("#q1").html("<h3>" + trivQuest[0].question + "</h3>");
    $("#a1").html("<input type='radio' name='a1' value='0'>" + "<label>" + trivQuest[0].choices[0] + "</label>"
        + "<input type='radio' name='a1' value='1'>" + "<label>" + trivQuest[0].choices[1] + "</label>"
        + "<input type='radio' name='a1' value='2'>" + "<label>" + trivQuest[0].choices[2] + "</label>"
    );

    // Question 2
    $("#q2").html("<h3>" + trivQuest[1].question + "</h3>");
    $("#a2").html("<input type='radio' name='a2' value='0'>" + "<label>" + trivQuest[1].choices[0] + "</label>"
        + "<input type='radio' name='a2' value='1'>" + "<label>" + trivQuest[1].choices[1] + "</label>"
        + "<input type='radio' name='a2' value='2'>" + "<label>" + trivQuest[1].choices[2] + "</label>"
    );

    // Question 3
    $("#q3").html("<h3>" + trivQuest[2].question + "</h3>");
    $("#a3").html("<input type='radio' name='a3' value='0'>" + "<label>" + trivQuest[2].choices[0] + "</label>"
        + "<input type='radio' name='a3' value='1'>" + "<label>" + trivQuest[2].choices[1] + "</label>"
        + "<input type='radio' name='a3' value='2'>" + "<label>" + trivQuest[2].choices[2] + "</label>"
    );

    // Question 4
    $("#q4").html("<h3>" + trivQuest[3].question + "</h3>");
    $("#a4").html("<input type='radio' name='a4' value='0'>" + "<label>" + trivQuest[3].choices[0] + "</label>"
        + "<input type='radio' name='a4' value='1'>" + "<label>" + trivQuest[3].choices[1] + "</label>"
        + "<input type='radio' name='a4' value='2'>" + "<label>" + trivQuest[3].choices[2] + "</label>"
    );

    // Question 5
    $("#q5").html("<h3>" + trivQuest[4].question + "</h3>");
    $("#a5").html("<input type='radio' name='a5' value='0'>" + "<label>" + trivQuest[4].choices[0] + "</label>"
        + "<input type='radio' name='a5' value='1'>" + "<label>" + trivQuest[4].choices[1] + "</label>"
        + "<input type='radio' name='a5' value='2'>" + "<label>" + trivQuest[4].choices[2] + "</label>"
    );
   

    // Submit button
    $("#finished").html("<button id='finished' class='btn'>FINISHED</button>");

    // Click event run keepScore() and displayResults() when user clicks Done button
    $("#finished").on("click", function() {

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
    $("#time-left").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

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


function displayResults() {


    $("#hideMe").hide();
    $("results").html("<h3>FINISHED</h3>");
    $("#correct").html("Correct: " + correct);
    $("#incorrect").html("Incorrect: " + incorrect);
    $("#unanswered").html("Unanswered: " + unanswered);
}

// Function keeps score in terms of correct, incorrect, and unanswered --- I still want to make this a reusable piece so that I don't have to repeat it for each question
function keepScore() {

    var guess1 = $("input[name='a1']:checked").val();
    var guess2 = $("input[name='a2']:checked").val();
    var guess3 = $("input[name='a3']:checked").val();
    var guess4 = $("input[name='a4']:checked").val();
    var guess5 = $("input[name='a5']:checked").val();

    // Question 1
    if (guess1 === undefined) {

        unanswered++;
    }
    else if (guess1 == trivQuest[0].answer) {

        correct++;
    }
    else {

        incorrect++;
    }

    // Question 2
    if (guess2 === undefined) {

        unanswered++;
    }
    else if (guess2 == trivQuest[1].answer) {

        correct++;
    }
    else {

        incorrect++;
    }

    // Question 3
    if (guess3 === undefined) {

        unanswered++;
    }
    else if (guess3 == trivQuest[2].answer) {

        correct++;
    }
    else {

        incorrect++;
    }

    // Question 4
    if (guess4 === undefined) {

        unanswered++;
    }
    else if (guess4 == trivQuest[3].answer) {

        correct++;
    }
    else {

        incorrect++;
    }

    // Question 5
    if (guess5 === undefined) {

        unanswered++;
    }
    else if (guess5 == trivQuest[4].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

}