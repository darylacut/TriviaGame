

   
function toggleQuiz() {

    var showQuiz = document.getElementById("myQuiz");
    var showStartbutton = document.getElementById("startButton");
    var showResults = document.getElementById("results");


    if (showQuiz.style.display === "none") {
        showQuiz.style.display = "block";
        showStartbutton.style.display = "none";

    } else {
        showQuiz.style.display = "none";
    }

        setTimeout(sixtySeconds, 1000 * 10);

        function sixtySeconds() {
            showQuiz.style.display = "none";
            showResults.style.display = "block";
        }   

}


//var points = 0;
//var rightAnswers = 0;
//var wrongAnswers = 0;

function checkAnswers () {
    if (document.getElementById("deer").checked) {
        sixtySeconds (); 
    }

}

// {
    
  //  if(document.getElementByValue('gender_Male').checked) {
        //Male radio button is checked
  //    }else if(document.getElementById('gender_Female').checked) {
        //Female radio button is checked

  //  for 
  ///  points++;
//}