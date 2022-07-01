

var transferData = document.location.search;

var categoryArray = transferData.split('=')[1];
var category = categoryArray.split('&')[0]

var difficultyArray = transferData.split('&')[1];
var difficulty = difficultyArray.split('=')[1];

var scoreArray = transferData.split('&')[2];
var score = scoreArray.split('=')[1];

console.log(category, difficulty, score)