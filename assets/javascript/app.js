




    
function toggleQuiz() {
    var correctCount = 0;
    var incorrectCount = 0;

    var showQuiz = document.getElementById("myQuiz");
    var showStartbutton = document.getElementById("startButton");
    var showResults = document.getElementById("results");
    var showTimer = document.getElementById("countdownTimer");


   
    if (showQuiz.style.display === "none") {
        showQuiz.style.display = "block";
        showTimer.style.display = "block";
        showStartbutton.style.display = "none";

    } else {
        showQuiz.style.display = "none";
    }


    var number = 50;
    var intervalId;
   
   
    run();

    function run() {
       clearInterval(intervalId); 
       intervalId = setInterval(decrement, 1000);
     }
   
     function decrement() {
       number--;
   
       $("#countdownTimer").html("<h2>" + number + "</h2>");
   
     }
    

        setTimeout(sixtySeconds, 1000 * 50);

        function sixtySeconds() {

            if (document.getElementById("deer").checked === true) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        
            if (document.getElementById("Canada").checked === true) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        
        
            if (document.getElementById("J.K. Rowling").checked === true) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        
        
            if (document.getElementById("Hobbes").checked === true) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        
        
            if (document.getElementById("King of Hearts").checked === true) {
                correctCount++;
            } else {
                incorrectCount++;
            }


            showQuiz.style.display = "none";
            showResults.style.display = "block";
            showTimer.style.display = "none";

            $('#correct').text(correctCount);
            $('#incorrect').text(incorrectCount); 
        }   


}


function endGame () {
    var correctCount = 0;
    var incorrectCount = 0;

    var showQuiz = document.getElementById("myQuiz");
    var showStartbutton = document.getElementById("startButton");
    var showResults = document.getElementById("results");
    var showTimer = document.getElementById("countdownTimer");

    if (document.getElementById("deer").checked === true) {
        correctCount++;
    } else {
        incorrectCount++;
    }

    if (document.getElementById("Canada").checked === true) {
        correctCount++;
    } else {
        incorrectCount++;
    }


    if (document.getElementById("J.K. Rowling").checked === true) {
        correctCount++;
    } else {
        incorrectCount++;
    }


    if (document.getElementById("Hobbes").checked === true) {
        correctCount++;
    } else {
        incorrectCount++;
    }


    if (document.getElementById("King of Hearts").checked === true) {
        correctCount++;
    } else {
        incorrectCount++;
    }

    $('#correct').text(correctCount);
    $('#incorrect').text(incorrectCount); 

    showQuiz.style.display = "none";
    showResults.style.display = "block";
    showTimer.style.display = "none";
}

