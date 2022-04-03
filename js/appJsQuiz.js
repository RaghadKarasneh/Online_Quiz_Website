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
let choosedAnswer=0;
let userQuizAnswers=[];
let x=[];

/*Array of object that conatin: questions, answers, and the correct answer */

let jsQuiz=[
    {
        questions:" 1- How to you select an element based on its css class?",
        choises:["getElementByClass" ,"querySelector","getElementById"],
        correctAnswer:"querySelector"
    
    },
    {
        questions:" 2- How to write an IF statement in JavaScript?",
        choises:["if(i==5)","if i=5","if i=5then"],
        correctAnswer:"if(i==5)"
    },
    {
        questions:" 3- How do you declare a JavaScript variabble?",
        choises:["variable carName;","none of these","let carName"],
        correctAnswer:"let carName"
    }
    ,
    {
        questions:" 4- Is it necessary for the external script file to contain a script tag?",
        choises:["Yes","No","None of above"],
        correctAnswer:"No"
    },];

/*To start the quize */
intitalization();

function intitalization(){
    quizBeginning(); /*We call this function to start from question 1 */
    answersContainer.addEventListener('click',function(e){
    let buttonClicked=e.target;
    checkAnswer(buttonClicked.innerText); // to check the answers and modefied the correct answers counter 
})    
}

/*To start the first quiz */
function quizBeginning(){
    questionText(jsQuiz[0]);
}

function checkAnswer(userAnswer){
    if(userAnswer == jsQuiz[currentQuestion].correctAnswer){ //To check the correct answer by comparing it with the answer in the jsQuiz array
        correctAnswerCount=correctAnswerCount+1; // calculate the correct answers
        console.log('the counter is:', correctAnswerCount);
    }
    //getUserAnswers();
    showNextQuestion(); /*we call this function to move for the next question */
    return correctAnswerCount;
}

function showNextQuestion(){
    if(currentQuestion==jsQuiz.length-1){
        document.getElementById('btn-next').style.display='block'; // to show the next button that will take me to result page after answering the last question
        nextButton.href='../../result.html';
    }
    else{
       currentQuestion++;
       questionText(jsQuiz[currentQuestion]);
       //To bring the question and its answers
    }
    LocalStorageFrom();
}

/*To bring the question and its answers*/
function questionText(question){
    questionBody.innerHTML=question.questions;
    answerOne.innerHTML=question.choises[0];
    answerTwo.innerHTML=question.choises[1];
    answerThree.innerHTML=question.choises[2];
}

/*To store the options number after clicking on options */

answerOne.addEventListener('click',function(e){
  
    userQuizAnswers.push(1);
});

answerTwo.addEventListener('click',function(e){
 
    userQuizAnswers.push(2);
 });

 answerThree.addEventListener('click',function(e){
     ;
  userQuizAnswers.push(3);

 });


/*Local storage */
function LocalStorageFrom(){
    console.log(correctAnswerCount);
    let array=JSON.stringify(correctAnswerCount); // to send the Answer counter value to result page
    localStorage.setItem('userAnswers',array);
    let array2=JSON.stringify(userQuizAnswers); // to send the answers options number that the user chose to result page
    localStorage.setItem('userQuizAnswers',array2)
}
/*Timer: 3 minutes */
function startTimer(duration, view_date) {
    let countdown = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(countdown / 60, 10);
        seconds = parseInt(countdown % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        view_date.textContent = minutes + ":" + seconds;

        if (--countdown < 0) {
            location.href='../../result.html'
        }
    }, 1000);
}

window.onload = function () {
   let minutesOfFive = 60 * 3,
        view_date = document.querySelector('#time');
    startTimer(minutesOfFive, view_date);
};