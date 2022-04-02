'use strict';
/*let resultP=document.getElementById('result-text');
/*To get username */
/*function GetDataFromRegForm(){
    let storageData=localStorage.getItem('regData');
    let userinfo=JSON.parse(storageData);
    console.log(userinfo);
    renderInformation(userinfo)
}
GetDataFromRegForm()*/
/*To get the correct answers */
function GetDataFromLovalStorage(){//to recive the locale storage value
    let storageData=localStorage.getItem('userAnswers');
    let parseData=JSON.parse(storageData); //store the correct answers counter
    console.log(parseData);
    renderInformation(parseData)
}
GetDataFromLovalStorage();

function renderInformation(parseData){

     
        resultP.innerHTML= `Hello! your score is ${parseData}`;

}