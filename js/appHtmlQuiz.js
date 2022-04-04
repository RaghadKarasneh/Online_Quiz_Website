'use strict';
let questionBody= document.getElementById("questions"); //Qustion title
let answerOne= document.getElementById("answer1");
let answerTwo= document.getElementById("answer2");
let answerThree= document.getElementById("answer3");
let answersContainer=document.getElementById('answersContainer');//quiz form
let questionNumber=document.getElementById('questionNumber');
let currentQuestion=0;
let quizContainer=document.getElementById("questionContainer");
let nextButton=document.getElementById('nextButton');
let correctAnswerCount=0;
let choosedAnswer=0;
let userQuizAnswers=[];
let x=[];

/*Array of object that conatin: questions, answers, and the correct answer */

let htmlQuiz=[
    {
        questions:"1- What does HTML stands for?",
        choises:["Hypertext Markup Language. " ,"Hypertext Machine language. "," Hypertext and links markup language."],
        correctAnswer:"Hypertext Markup Language.",
        questionQuizNumber:'1'
    
    
    },
    {
        questions:" 2-Which of the following HTML Elements is used for making any text bold ?",
        choises:[`<  b >`,` < p >`,` < i >`],
        correctAnswer:"<b>",
        questionQuizNumber:'2'
    
    },
    {
        questions:" 3-Which of the following attributes is used to add link to any element?",
        choises:["href","ref","link"],
        correctAnswer:"href",
        questionQuizNumber:'3'
    
    },
    {
    
    
        questions:"4- Where is the meta tag only found?",
        choises:["The last page","The home page","The second page"],
        correctAnswer:"The second page",
        questionQuizNumber:'4'
    },
    {
        questions:"5- How many attributes are there in HTML5?",
        choises:["2","4"," None of the above"],
        correctAnswer:" None of the above",
        questionQuizNumber:'5'
    },
    
    
    ];

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
    questionText(htmlQuiz[0]);
}

function checkAnswer(userAnswer){
    if(userAnswer == htmlQuiz[currentQuestion].correctAnswer){ //To check the correct answer by comparing it with the answer in the jsQuiz array
        correctAnswerCount=correctAnswerCount+1; // calculate the correct answers
        console.log('the counter is:', correctAnswerCount);
    }
    //getUserAnswers();
    showNextQuestion(); /*we call this function to move for the next question */
    return correctAnswerCount;
}

function showNextQuestion(){
    if(currentQuestion==htmlQuiz.length-1){
        document.getElementById('btn-next').style.display='block'; // to show the next button that will take me to result page after answering the last question
        nextButton.href='../../htmlResult.html';
    }
    else{
       currentQuestion++;
       questionText(htmlQuiz[currentQuestion]);
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
    questionNumber.innerHTML=question.questionQuizNumber
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
    localStorage.setItem('userHtmlAnswers',array);
    let array2=JSON.stringify(userQuizAnswers); // to send the answers options number that the user chose to result page
    localStorage.setItem('userHtmlQuizAnswers',array2)
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
            location.href='../../htmlResult.html'
        }
    }, 1000);
}

window.onload = function () {
   let minutesOfFive = 60 * 3,
        view_date = document.querySelector('#time');
    startTimer(minutesOfFive, view_date);
};