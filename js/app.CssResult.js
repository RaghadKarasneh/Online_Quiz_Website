

function GetDataFromLovalStorge(){//to recive the locale storage value
    let storgeData=localStorge.getItem('userAnswersCSSQuiz');// for the counter
    let storgeDataAnswers=localStorage.getItem('userQuizAnswersCSSQuiz')// for user answers


    let parseData=JSON.parse( storgeData);//store the correct answers counter
    let parseDataAnswers=JSON.parse(storgeDataAnswers);
    renderInformation(parseData,parseDataAnswers)

}
GetDataFromLovalStorge()
function renderInformation(parseData,parseDataAnswers){
   
    let correctQuizAnswers=[1,3,3,2];
    for (let i=0;i<correctQuizAnswers.length;i++){
        if(parseDataAnswers[i]==correctQuizAnswers[i]){
            console.log(parseDataAnswers[i],'correct');
        } else
        console.log(parseDataAnswers[i],'false');
    }
    
}