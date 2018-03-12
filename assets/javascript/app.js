// need to have a  count down timer set for Questions
// list of questions that are muiltple choose
// reveal the number of questions that are correct and incorrect
// button to start game and timer

$(document).ready(function () {

  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

  // questions for Game
  var pubQuiz = [{
    question: "Outside which New York building was John Lennon killed?",
    wrongAnswers: ["St. Paul’s Cathedral", "The Gherkin", "Big Ben"],
    correct: "The Dakota Building",
  },
  {
    question: "Which character does Morgan Freeman play in Bruce Almighty?",
    wrongAnswers: ["Bruce Nolan", "Evan Baxter", "Jack Baylor"],
    correct: "God",
  },
  {
    question: "Complete the advertising slogan for FedEx: 'When there is no..'",
    wrongAnswers: ["Good", "Life", "Other"],
    correct: "Tomorrow",
  },
  {
    question: "Wellington is the capital city of which country?",
    wrongAnswers: ["Australia", "England", "Norway"],
    correct: "New Zealand",
  },
  {
    question: "What letter is located between letters X and V on a standard keyboard?",
    wrongAnswers: ["Letter A", "Letter M", "Letter Z"],
    correct: "Letter C",
  },
  {
    question: "How many megabytes are there in 1 gigabyte?",
    wrongAnswers: ["1023", "950", "1200"],
    correct: "1000",
  },
  {
    question: "During which decade did Elvis Presley die?",
    wrongAnswers: ["The 1980s", "The 1960s", "The 1990s"],
    correct: "The 1970s",
  }
];

userGuess = ["","","","","","",""];
$(document).on('click','button', function() {
  var val = $(this).val();
  var place = $(this).attr('data-id');
  // var place = pubQuiz[num];
  userGuess.splice(place, 1, val);
  console.log(place);
  console.log(userGuess);

  
});
// checking user guess against correct answers in the quiz
  // for (var k = 0; k < userGuess.length; k++){
  //   if (userGuess[k] == pubQuiz[k].correct){
  //     correct ++;
  //   } else if( userGuess[k] != pubQuiz[k].correct) {
  //     incorrect ++;
  //   } else if( userGuess[k] == "") {
  //     unanswered ++;
  //   }
  // }

  // button to start game and start timer
  $("#start").on('click', startGame);

  function startGame() {
    $('#start').off('click', startGame);

    var timer = 10;
    var setTimer = setInterval(decrementTimer, 1000);

    function decrementTimer() {
      $('#timer').text(timer);
      timer--;
      // console.log(timer);

      if (timer < 0) {
        // console.log("timerstop");
        clearInterval(setTimer);
        for (var k = 0; k < userGuess.length; k++){
          if (userGuess[k] == pubQuiz[k].correct){
            correct ++;
          } else if( userGuess[k] == "") {
            unanswered ++;
          } else if( userGuess[k] != pubQuiz[k].correct) {
            incorrect ++;
          } 
        };
        $('#correct').text("Correct " + correct);
        $('#incorrect').text("Incorrect " + incorrect);
        $('#unanswered').text("Unanswered " + unanswered);
      }
    }
    // generate a random number to splice in the "correct" answer into the "wrongAnswers" array
    // var num = Math.floor(Math.random() * 3);
    // // splicing in the 'correct' answer into the 'wrongAnswers' array.
    // var answers = pubQuiz[2].wrongAnswers.splice(num, 0, pubQuiz.correct);

    // console.log(answers);
    

    for (var i = 0; i < pubQuiz.length; i++) {
      $(".questionBox").append("<div><p>" + pubQuiz[i].question + "</p></div>");
      // console.log(pubQuiz[i])
      // console.log(pubQuiz[i].wrongAnswers.length);

      // splicing in the 'correct' answer with wrong answer array
      var num = Math.floor(Math.random() * 3);
      // splicing in the 'correct' answer into the 'wrongAnswers' array.
      var answers = pubQuiz[i].wrongAnswers.splice(num, 0, pubQuiz[i].correct);
      // console.log(answers);

      // value to each button for answer selection, to then insert into userGuessed array
      for (var j = 0; j < pubQuiz[i].wrongAnswers.length; j++) {
        $(".questionBox").append("<div><button value = '" + pubQuiz[i].wrongAnswers[j] + "' data-id = '" + i + "'>" + pubQuiz[i].wrongAnswers[j] + "</button></div>");
        // console.log(pubQuiz[i].wrongAnswers);

      };
    };
    // $('button').on('click', function(){
    //   set
    // })
    // $("<button>" + pubQuiz[i].correct + "</button>").on('click') {
    //    correct = 0 ++;
    // }
    // console.log();
    // // generate a random number to splice in the "correct" answer into the "wrongAnswers" array
    // var num = Math.floor(Math.random() * 3);
    // // splicing in the 'correct' answer into the 'wrongAnswers' array.
    // var answers = pubQuiz[2].wrongAnswers.splice(num, 0, pubQuiz.correct);

    // console.log(answers);
    
    // $('#timer').on('click', function)
    
  };
  
})