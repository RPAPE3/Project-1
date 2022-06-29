

var questionIndex = 0;


var getUserPreference = function () {
    //Will need to identify how to pull userInput and userInput_2. 
    var category = userInput; 
    var difficulty = userInput_2; 

    getQuestionData(category, difficulty)
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




