'use strict';
let resultP=document.getElementById('result-text');
/*To get username */

    /*let storageDataUserInfo=localStorage.getItem('regData');
    let userinfo=JSON.parse(storageDataUserInfo);*/

/*To get the correct answers */
function GetJsDataFromLocalStorage(){//to recive the locale storage value
    let storageData=localStorage.getItem('userAnswers'); // for the counter

    let storageDataAnswers=localStorage.getItem('userQuizAnswers'); // for user answers
    let parseData=JSON.parse(storageData); //store the correct answers counter
    let parseDataAnswers=JSON.parse(storageDataAnswers);
    renderInformation(parseData,parseDataAnswers);
}
GetJsDataFromLocalStorage();

function renderInformation(parseData,parseDataAnswers){
    console.log('hello');
    let correctQuizAnswers=[1,3,3,2];
    for (let i=0;i<correctQuizAnswers.length;i++){
        if(parseDataAnswers[i]==correctQuizAnswers[i]){
            console.log(parseDataAnswers[i],'correct');
        } else
        console.log(parseDataAnswers[i],'false');
    }
    //resultP.innerHTML= `Hello! your score is ${userinfo}`;
     
        //resultP.innerHTML= `Hello! your score is ${parseData}, the answers are ${parseDataAnswers}`;
        

}