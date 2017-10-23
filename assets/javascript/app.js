var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var count = 30;

// Start Button //////////////////////////////////////////////////

$(document).ready(function() {


    $(".trivia").hide();
    $(".score").hide();

    $("#start").on("click", function() {

        $(".trivia").show();
        $(this).hide();

        //count down timer///////////////////////////////////////////////

        count = 30;

        var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

        function timer() {
            count = count - 1;
            $("#timerHere").html(count);

            if (count <= 0) {
                clearInterval(counter);
                quizScore();




                //counter ended, do something here
                return;
            }
            $("#timerHere").html(count);
            //Do code for showing the number of seconds here
        }




    })
});







//Trivia Questions///////////////////////////////////////////////////////////////////////////////////////


$("#submit").on('click', function() {

    quizScore();




});

function quizScore() {
    count = 30;

    var arr = [];


    $('input[type="radio"]:checked').each(function() {
        arr.push($(this).val()); //push values in array
    });
    console.log(arr);

    for (i = 0; i < arr.length; i++) {

        if (arr[i] === "right") {
            correctAnswers++
        } else {
            wrongAnswers++
        }
    }

    unanswered = 5 - arr.length;

    console.log("correct answers: " + correctAnswers);
    console.log("wrong answers: " + wrongAnswers);
    console.log("Unanswered Qs: " + unanswered);
    $(".correct").html("Correct Answers: " + correctAnswers);
    $(".wrong").html("Incorrect Answers: " + wrongAnswers);
    $(".unanswered").html("Unanswered: " + unanswered);

    $(".trivia").hide();

    $(".score").show();

    correctAnswers = 0;
    wrongAnswers = 0;
    unanswered = 0;



};