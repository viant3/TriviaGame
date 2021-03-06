var correct = 0;
var incorrect = 0;
var unanswered = 0;

var number = 45;
var intervalId;

var chuckTrivia = [{
    question: "What famous actor turned world leader helped bring about the fall of the Soviet Union?",
    choices: ["Mikhail Gorbachev", "Ronald Reagan", "Chuck Norris"],
    answer: 2
},
{
    question: "Who invented the World Wide Web?",
    choices: ["Tim Berners-Lee ", "Chuck Norris", "Al Gore"],
    answer: 1
},
{
    question: "Who actually stopped the 1988 Christmas Eve terrorist attack on Nakatomi Plaza?",
    choices: ["Chuck Norris", "Sgt. Al Powell", "John McClane "],
    answer: 0
},
{
    question: "If you drove a car at the speed of light and turned on the headlights, what would you see?",
    choices: ["Darkness", "The light from the headlights would illuminate as usual.", "Chuck Norris"],
    answer: 2
}];

getChucked = () => {

    $("#start").on("click", function () {
        $(this).hide();
        $("#chuckFacts").hide();
        $("#chucksChoice").html("Try not to embarass yourself in front of Chuck!")
        $("#time-left").html("<h2>Time Remaining: <span class='red'>45</span> Seconds</h2>" + "<br>");


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

        $("#finished").on("click", function () {

            keepScore();
            displayResults();

        });
    });
};

runTimer = () => {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

decrement = () => {

    number--;
    $("#time-left").html("<h2>Time Remaining: <span class='red'>" + number + "</span> Seconds</h2>" + "<br>");

    if (number === 0) {

        stop();

        keepScore();
        displayResults();

    }
};

stop = () => {

    clearInterval(intervalId);
};



displayChuck = () => {

    if (correct >= 3) {
        $("#theMyth").html("<img class='resizeChuck' src='assets/images/chuckApproves.gif'>");
        $("#chucksChoice").html("NICE JOB!");

    }
    else {
        $("#theMyth").html("<img class='resizeChuck' src='assets/images/chucksMad.gif'>");
        $("#chucksChoice").html("Disgraceful!");
    }
};


displayResults = () => {

    stop();
    $("#hideMe").hide();
    $("#correct").html("You answered " + correct + " correctly.");
    $("#incorrect").html("You answered " + incorrect + " incorrectly.");
    $("#unanswered").html("You left " + unanswered + " unanswered.<br><br>")
    displayChuck();
    $("#reset").html("<button id='finished' class='btn'>TRY AGAIN</button>");
    $("button").click(function () {
        location.reload();
    });
};


keepScore = () => {


    var guess1 = $("input[name='a1']:checked").val();
    var guess2 = $("input[name='a2']:checked").val();
    var guess3 = $("input[name='a3']:checked").val();
    var guess4 = $("input[name='a4']:checked").val();

    var guessesArr = [guess1, guess2, guess3, guess4];

    for (i = 0; i < guessesArr.length; i++) {

        if (!guessesArr[i]) {
            unanswered++;
        }
        else if (guessesArr[i] == chuckTrivia[i].answer) {
            correct++;
        }
        else {
            incorrect++;
        }

    }
};

getChucked();