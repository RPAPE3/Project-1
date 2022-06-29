var categoryEl = document.querySelector(".category");
var difficultyEl = document.querySelector(".difficulty");

var questionIndex = 0;


var getUserPreference = function () {


    var category = categoryEl.value
    var difficulty = difficultyEl.value

    if (category && difficulty) {
        getQuestionData(category, difficulty);
    } else {
        //NEED TO CHANGE ALERT TO EITHER A HELPER TEST/TEXT? OR SNAKE BAR. 
        alert("Category and Difficulty but have selections")
    }
  
};
  
  
  
  var getQuestionData = function (category, difficulty) {
    var userTriviaData = "https://the-trivia-api.com/api/questions?categories="+ category +"&limit=10&difficulty="+ difficulty;

    fetch(userTriviaData)
      .then(function (response) {
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

    question.innerHTML = question_screen.question;
    choice_A.innerHTML = question_screen.incorrectAnswers[0];
    choice_B.innerHTML = question_screen.correctAnswer;
    choice_C.innerHTML = question_screen.incorrectAnswers[1];
    choice_D.innerHTML = question_screen.incorrectAnswers[2];
  };




