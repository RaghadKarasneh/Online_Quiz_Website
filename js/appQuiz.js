'use strict';
let questionBody= document.getElementById("questions"); //Qustion title
let answerOne= document.getElementById("answer1");
let answerTwo= document.getElementById("answer2");
let answerThree= document.getElementById("answer3");
let answersContainer=document.getElementById('answersContainer');//quiz form
let currentQuestion=0;
let quizContainer=document.getElementById("questionContainer");
let nextButton=document.getElementById('nextButton');
let correctAnswerCount=0;

let jsQuiz=[
{
    questions:"Inside which HTML element do we put the Javascript?",
    choises:["js" ,"src","script"],
    correctAnswer:"js"

},
{
    questions:"Where is the correct place to insert a JavaScript?",
    choises:["Both the head section and the body section are correct","The head section","None of the above"],
    correctAnswer:"None of the above"
},
{
    questions:"hi",
    choises:["Both the head section and the body section are correct","The head section","None of the above"],
    correctAnswer:"None of the above"
},];

/*To start the quize */
intitalization();

function intitalization(){
quizBeginning();
    answersContainer.addEventListener('click',function(e){
    let buttonClicked=e.target;
    checkAnswer(buttonClicked.innerText);
})
    
}
/*To start the quiz */
function quizBeginning(){
    questionText(jsQuiz[0]);
}
function checkAnswer(userAnswer){
    if(userAnswer == jsQuiz[currentQuestion].correctAnswer){ //To check the correct answer by comparing it with the answer in the jsQuiz array
        correctAnswerCount=correctAnswerCount+1; // calculate the correct answers
        console.log(correctAnswerCount);
    }
    showNextQuestion();
    
}
function showNextQuestion(){
    if(currentQuestion==jsQuiz.length-1){
        nextButton.style.display='block'; // to show the next button that will take me to result page
        nextButton.href='../../result.html';
    }
    else{
       currentQuestion++;
       questionText(jsQuiz[currentQuestion]);//To bring the question and its answers
    }
}
function questionText(question){//To bring the question and its answers
questionBody.innerHTML=question.questions;
answerOne.innerHTML=question.choises[0];
answerTwo.innerHTML=question.choises[1];
answerThree.innerHTML=question.choises[2];

}
console.log('hi'+correctAnswerCount);
LocalStorageFrom();
/*Local storage */
function LocalStorageFrom(){
  
    let array=JSON.stringify(correctAnswerCount);
    localStorage.setItem('userAnswers',array);

}