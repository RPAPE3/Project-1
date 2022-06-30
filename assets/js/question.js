var categoryEl = document.querySelector(".category");
var difficultyEl = document.querySelector(".difficulty");
var questionEl = document.querySelector(".question");
var choice_A_El = document.querySelector(".choice_A");
var choice_B_El = document.querySelector(".choice_B");
var choice_C_El = document.querySelector(".choice_C");
var choice_D_El = document.querySelector(".choice_D");

var questionIndex = 0;

    var inputPreferences = document.location.search;
    var difficulty = inputPreferences.split('=')[2];

    var categoryArray = inputPreferences.split('&');
    var category = categoryArray[0].split('=')[1];
    console.log(inputPreferences)
    console.log(difficulty)
    console.log(categoryArray)
    console.log(category)

// getQuestionData(category, difficulty);


var getQuestionData = function (category, difficulty) {
    var userTriviaData = "https://the-trivia-api.com/api/questions?categories="+category+"&limit=10&difficulty="+difficulty;
console.log(userTriviaData)
    fetch(userTriviaData)
      .then(function (response) {
        console.log(response)
        if (response.ok) {
          response.json().then(function (data) {
              console.log(data)
              retrieveFirstQuestion(data);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect the trivia questions');
      });
  };

  function retrieveFirstQuestion (data) {
      
    var question_screen = data[questionIndex];
    console.log(question_screen)

    questionEl.innerHTML = question_screen.question;
    choice_A_El.innerHTML = question_screen.incorrectAnswers[0];
    choice_B_El.innerHTML = question_screen.correctAnswer;
    choice_C_El.innerHTML = question_screen.incorrectAnswers[1];
    choice_D_El.innerHTML = question_screen.incorrectAnswers[2];
  };


  getQuestionData(category, difficulty);