'use strict';

 let tableBody=document.getElementById("tablebody");
let correctAnswers=0;
let wrongAnswers=0;
let resultP=document.getElementById('result-p');
let videoCongrats=document.getElementById('video');
let finalResult=document.getElementById('finalResult');
/*To get username */


/*To get the correct answers */
function GetCssDataFromLocalStorage(){//to recive the locale storage value

    /*To get username */
    let storageDataUserInfo=localStorage.getItem('regData');
    let userinfo=JSON.parse(storageDataUserInfo);
    console.log(userinfo);

    /* To get the counter of correct answers*/
    let storageData=localStorage.getItem('userCssAnswers');
    let parseData=JSON.parse(storageData); //store the correct answers counter

    /* To get the user's answers*/
    let storageDataAnswers=localStorage.getItem('userCssQuizAnswers'); // for user answers
    let parseDataAnswers=JSON.parse(storageDataAnswers);

    renderInformation(parseData,parseDataAnswers,userinfo);
}
GetcssDataFromLocalStorage();

function renderInformation(parseData,parseDataAnswers,userinfo){

    let correctQuizAnswers=[1,1,1,1,1]; //The correct Html quiz answers

    for (let i=0;i<correctQuizAnswers.length;i++){
        /*To add a row and cells with the questions number and true ot false value depends on the user answers */
      let tr=document.createElement('tr');
      let td1=document.createElement('td');
      let td2=document.createElement('td');
      tableBody.appendChild(tr);
      tr.appendChild(td1);
      tr.appendChild(td2);
  
      /*To check if user's answers are correct or not and to some actions in  */
      if(parseDataAnswers[i]==correctQuizAnswers[i]){
        console.log(td1);
        console.log(td2);
        td1.innerHTML = i+1;
        td2.textContent ="true";
        correctAnswers=correctAnswers+1;
        console.log(correctAnswers);
       
        td1.style.color='green';
        td2.style.color='green';
        
        }
        else{
        td1.innerHTML = i+1;
        td2.innerHTML ="false";
        wrongAnswers=i+1;
        
        videoCongrats.style.display='none';
        td1.style.color='red';
        td2.style.color='red';

    }
}//Dear ${userinfo[0].fname}  ${userinfo[0].lname}
    if(correctAnswers>=3){
        finalResult.innerHTML='Congratulations, you did it!';
        videoCongrats.style.display='block';
        document.body.style.backgroundColor = "#29c429";
    }
    else{
        finalResult.innerHTML=`Unfortunately you didn't pass, plaese try agian.`;
        document.body.style.backgroundColor = "#f22929";
        videoCongrats.style.display='none';
    }
    resultP.innerHTML= `Dear ${userinfo[0].fname}  ${userinfo[0].lname} your score is ${correctAnswers} of 5, the number of the correct answers are ${correctAnswers} and the number of the wrong answers are ${5-correctAnswers}.`;
}

/*To show the table after clicking the show answers button */
function showtable() {
    document.getElementById("htmltable").style.display = 'block';
}