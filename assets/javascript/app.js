// need to have a  count down timer set for Questions
// list of questions that are muiltple choose
// reveal the number of questions that are correct and incorrect
// button to start game and timer

$(document).ready(function(){

// button to start game and start timer
$("#start").on('click', startGame);
function startGame() {

  var timer= 60;
  var setTimer= setInterval(decrementTimer,1000);
  function decrementTimer() {
    $('#timer').text(timer);
   timer --;
   console.log(timer);
   if (timer < 0){
     console.log("timerstop");
     clearInterval(setTimer);
   }
  }

  // questions for Game
  var pubQuiz= [{
                Question:"Outside which New York building was John Lennon killed?",
                wrongAnswers:"St. Paul’s Cathedral","The Gherkin","Big Ben",
                correct:"The Dakota Building",
              }
              {
                Question:"Which character does Morgan Freeman play in Bruce Almighty?",
                wrongAnswers:"Bruce Nolan","Evan Baxter","Jack Baylor",
                correct:"God",
              }
              {
              Question:"Complete the advertising slogan for FedEx: 'When there is no..''"
              wrongAnswers:"Good", "Life", "Other",
              correct: "Tomorrow",
              }
              {
              Question:"Wellington is the capital city of which country?",
              wrongAnswers:"Australian","England","Norway",
              correct:"New Zealand"
              }
              {
              Question:"What letter is located between letters X and V on a standard keyboard?",
              WrongAnswers:"Letter A","Letter M","Letter Z",
              correct:"Letter C"
              }
              {
              Question:"How many megabytes are there in 1 gigabyte?"
              WrongAnswers:"1023","950","1200",
              Correct:"1000"
              }
              {
              Questions:"During which decade did Elvis Presley die?",
              WrongAnswers:"The 1980s","The 1960s","The 1990s",
              Correct:"The 1970s"
              }
  ]

}
});
