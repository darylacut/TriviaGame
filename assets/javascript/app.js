

   
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
    

function getResults () {
    var showQuiz = document.getElementById("myQuiz");
    var showStartbutton = document.getElementById("startButton");
    var showResults = document.getElementById("results");

    showQuiz.style.display = "none";
    showResults.style.display = "block";
}

// {
    
  //  if(document.getElementByValue('gender_Male').checked) {
        //Male radio button is checked
  //    }else if(document.getElementById('gender_Female').checked) {
        //Female radio button is checked

  //  for 
  ///  points++;
//}