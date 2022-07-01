var startBtn = document.querySelector(".start-btn");
var categoryEl = document.querySelector(".category");
var difficultyEl = document.querySelector(".difficulty");

console.log(startBtn)



var getUserPreference = function () {

    var category = categoryEl.value
    var difficulty = difficultyEl.value

    if (category && difficulty) {
        location.assign(`./question.html?category=${category}&difficulty=${difficulty}`);
    } else {
        //NEED TO CHANGE ALERT TO EITHER A HELPER TEST/TEXT? OR SNAKE BAR. 
        alert("Category and Difficulty but have selections")
    }
  
};



startBtn.addEventListener("click", getUserPreference);
