


var getUserPreference = function () {
    var category = userInput; 
    var difficulty = userInput_2; 

    getQuestionData(category, difficulty)
}
  
  
  
  
  var getQuestionData = function (category, difficulty) {
    var userTriviaData = "https://the-trivia-api.com/api/questions?categories="+ category +"&limit=10&difficulty="+ difficulty;

    fetch(userTriviaData)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
              console.log(data)
            displayWeather(data);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect the trivia questions');
      });
  };



