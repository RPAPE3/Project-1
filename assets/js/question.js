var categoryEl = document.querySelector(".category");
var difficultyEl = document.querySelector(".difficulty");
var questionEl = document.querySelector(".question");
var choice_A_El = document.querySelector(".choice_A");
var choice_B_El = document.querySelector(".choice_B");
var choice_C_El = document.querySelector(".choice_C");
var choice_D_El = document.querySelector(".choice_D");


var questionIndex = 0;
var question_screen;
var score = 0;
// console.log(score);

var inputPreferences = document.location.search;
var difficulty = inputPreferences.split('=')[2];

var categoryArray = inputPreferences.split('&');
var category = categoryArray[0].split('=')[1];


var getQuestionData = function (category, difficulty) {
    var userTriviaData = "https://the-trivia-api.com/api/questions?categories="+category+"&limit=10&difficulty="+difficulty;
    fetch(userTriviaData)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
              console.log(data)
              retrieveQuestion(data);
    });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
    //   .catch(function (error) {
    //     alert('Unable to connect the trivia questions');
    //   });
  };


  function retrieveQuestion (data) {
      // created variable name for each data index
    question_screen = data[questionIndex];
    // console.log(questionIndex)
    console.log(question_screen)
  
    // gathering needed info from data index to an array. 
    var choicesArray = [
        option_1 = question_screen.incorrectAnswers[0],
        option_2 = question_screen.correctAnswer,
        option_3 = question_screen.incorrectAnswers[1],
        option_4 = question_screen.incorrectAnswers[2],
      ];
      //shuffle/randomizing the choices for the user to select. 

      function shuffle(array) {
        let currentIndex = array.length
      
        while (currentIndex != 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      };
    
      //calling shuffle function 
      shuffle(choicesArray);
      

      //displaying choicesArray and question 
      console.log(choicesArray);
        questionEl.innerHTML = question_screen.question;
        choice_A_El.innerHTML = choicesArray[0];
        choice_B_El.innerHTML = choicesArray[1];
        choice_C_El.innerHTML = choicesArray[2];
        choice_D_El.innerHTML = choicesArray[3];
  };

  function keepScore () {
    if (difficulty === "easy") {
        score = score + 5;
    } else if (difficulty === "medium"){
        score += 10;
    } else if (difficulty === "hard"){
        score += 15;
    }
    console.log(score);
  };

  document.addEventListener("click", function (event) {

    var target = event.target;

     if (target.matches(".choice")) {
            if (question_screen.correctAnswer === target.textContent) {
                questionIndex++
                getQuestionData(category, difficulty);
                keepScore();
            } else if (question_screen.correctAnswer != target.textContent) {
                questionIndex++
                getQuestionData(category, difficulty);
            }
     }
            if (questionIndex === 10) {
                location.assign(`./endgame.html?category=${category}&difficulty=${difficulty}&score=${score}`);
            }

            console.log(questionIndex);
    });


  getQuestionData(category, difficulty);