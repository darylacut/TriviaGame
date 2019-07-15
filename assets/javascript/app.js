
    
function toggleQuiz() {
    var correctCount = 0;
    var incorrectCount = 0;

    var showQuiz = document.getElementById("myQuiz");
    var showStartbutton = document.getElementById("startButton");
    var showResults = document.getElementById("results");

   
    if (showQuiz.style.display === "none") {
        showQuiz.style.display = "block";
        showStartbutton.style.display = "none";

    } else {
        showQuiz.style.display = "none";
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
}

