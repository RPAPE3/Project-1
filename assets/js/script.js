var startBtn = document.querySelector(".glow-on-hover");
var categoryEl = document.querySelector(".category");
var difficultyEl = document.querySelector(".difficulty");

console.log(startBtn)



var getUserPreference = function () {

    var category = categoryEl.value
    var difficulty = difficultyEl.value

    if (category && difficulty) {
        location.assign(`./questions.html?category=${category}&difficulty=${difficulty}`);
    } else {
        location.assign(`./question.html?category=${category}&difficulty=${difficulty}`);
    }
}
  
function myFunction(){
    var snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}



startBtn.addEventListener("click", getUserPreference);

// var getUserPreference = function () {

//     var category = categoryEl.value
//     var difficulty = difficultyEl.value
// console.log(category)
// console.log(difficulty)
//     if (category && difficulty) {
//         location.assign(`./question.html?category=${category}&difficulty=${difficulty}`);
//     } else {
//        myFunction()
//     }
  
// function myFunction(){
//     var snackbar = document.getElementById("snackbar");
//     snackbar.className = "show";
//     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
//}