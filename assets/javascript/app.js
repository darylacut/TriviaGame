function toggleQuiz() {
    var showQuiz = document.getElementById("myQuiz");
    var showStartbutton = document.getElementById("startButton");

    if (showQuiz.style.display === "none") {
        showQuiz.style.display = "block";
        showStartbutton.style.display = "none";

    } else {
        showQuiz.style.display = "none";
    }

        setTimeout(sixtySeconds, 1000 * 60);

        function sixtySeconds() {
            showQuiz.style.display = "none";
        }   

}


//var points = 0;
//var rightAnswers = 0;
//var wrongAnswers = 0;


//$("#endGame").on('click', function (checkAnswers);

//function checkAnswers () {
    
  //  if(document.getElementByValue('gender_Male').checked) {
        //Male radio button is checked
  //    }else if(document.getElementById('gender_Female').checked) {
        //Female radio button is checked

  //  for 
  ///  points++;
//}