var startBtn = document.querySelector(".glow-on-hover");
var categoryEl = document.querySelector(".category");
var difficultyEl = document.querySelector(".difficulty");

console.log(startBtn)



var getUserPreference = function () {

    var category = categoryEl.value
    var difficulty = difficultyEl.value

    if (category === "Categories"  || difficulty === "Difficulty Level") {
        myFunction()
    } else {
        location.assign(`./questions.html?category=${category}&difficulty=${difficulty}`);
    }
};

function myFunction() {
    var snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", "");}, 3000);
}


startBtn.addEventListener("click", getUserPreference);