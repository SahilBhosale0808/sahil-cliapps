var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("Whats your Name? ");

console.log("Welcome", userName, "to DO YOU KNOW SAHIL QUIZ GAME")

function play (question,answer){
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Right!"),
    score = score + 1
  }else{
    console.log("Wrong!")
  }

  console.log("Current Score: ",score)
  console.log("------------")
}


var questions = [ {
  question : "Where do i live?",
  answer : "nigdi"
},{
  question : " Who is my Favourite Football Player?",
  answer : "david de gea"
},

{
  question : " Which is my Favourite Football Team?",
  answer : "manchester united"
},
{
  question : "What is my Birthday Month?",
  answer : "august"
},
{
  question : "What is my favourite food?",
  answer : "vadapav"
}






 ]

for (var i = 0; i<questions.length; i = i+1){
  currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("Yay! you Scored ", score, "points")