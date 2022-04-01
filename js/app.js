'use strict';

let regFormx=document.getElementById('regs_form');
let firstName=document.getElementById('fname');
let lastName=document.getElementById('lname');
let nameError=document.getElementById('error-name');
let emailError=document.getElementById('error-email');
let passwordError=document.getElementById('error-password');
let regSubmitButton=document.getElementById('reg-submit-link');
let info=[];

/*LocalStorage */
function LocalStorageFrom(){
    let array=JSON.stringify(info);
    localStorage.setItem('regData',array);
}

/*Regestration Constructor */
function regForm(fname,lname,email,password,spassword,selectList){

this.fname=fname;
this.lname=lname;
this.email=email;
this.password=password;
this.spassword=spassword;
this.selectList=selectList;
console.log(this.selectList);
this.fullName=userName(this.fname,this.lname);
this.correctEmail=correctEmail(this.email);
this.correctPassword=checkPassword(this.password,this.spassword);
console.log(this.fullName);
info.push(this);

LocalStorageFrom()
}

/*To return the full name */
function userName(fname,lname){
    nameError.style.display='';
    let x;
    let regex = /[a-zA-Z\s]+$/;
    if ((regex.test(fname)) && (regex.test(lname))){
        console.log('correct');
        x = fname + ' '+ lname;
        return x;
    }
    else{
        nameError.style.display='block';
        nameError.innerHTML='Incorrect name! Your name must contain leeters only.';
        return 'Incorrect name';
    }
}

/*To check from the email */
function correctEmail(email){
    emailError.innerHTML='';
    let regex=/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)){
      emailError.style.display='block';
      emailError.innerHTML= 'Incorrect Email!';
      return 'Incorrect Email!';
    }
    else{
        emailError.style.display='none';
    }
  }

/*To check from password */
function checkPassword(password,spassword){
    passwordError.innerHTML='';
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=(.*[\d]){2,})[A-Za-z\d?]{8,32}$/;
    let num=/[\d]{2,}/;
    let capital=/[A-Z]/;
    let symboles=/[#$@!%&*?]/;
    if ((regex.test(password))&& (regex.test(spassword))){ //To check from 2 passwords syntax
        console.log('password syntax is Incorrect');
        passwordError.style.display='block';
        passwordError.innerHTML= 'password syntax is Incorrect';
        
    }
    else if((!capital.test(password[0])) && (!capital.test(spassword[0]))){ //To check from the first letter
        console.log( 'Incorrect! first name must be capital.');
        passwordError.style.display='block';
        passwordError.innerHTML= 'Incorrect! first name must be capital.';
    }
    else if((!num.test(password))&&(!num.test(spassword))){
        console.log('Your password must contain 2 numbers at least');
        passwordError.style.display='block';
        passwordError.innerHTML= 'You password must contain 2 numbers at least';
    }
    else if((!symboles.test(password)) && !symboles.test(spassword)){
        console.log('Your password must contain  at least 1 character');
        passwordError.style.display='block';
        passwordError.innerHTML= 'You password must contain  at least 1 character';
    }
    else if((password===spassword) &&(password.length>=8 && password.length<=32) &&(spassword.length>=8 && spassword.length<=32)){
        console.log('password syntax is correct');
        console.log('The first name is capital');
        console.log( 'Passwords match');
        passwordError.style.display='none';
    }else{
       console.log(`Passwords don't match or the length is more than 8 or less than 32`);
       passwordError.style.display='block';
       passwordError.innerHTML= `Passwords don't match or the length is incorrect (length must be more or equal than 8 and less than or equal 32`;
    }
}
regFormx.addEventListener('submit', handelSubmit);
function handelSubmit(e){
    e.preventDefault();
    let fname=e.target.fname.value;
    let lname=e.target.lname.value;
    let email=e.target.email.value;
    let password=e.target.password.value;
    let spassword=e.target.spassword.value;
    let selectList=e.target.selectList.value;
    new regForm(fname,lname,email,password,spassword,selectList); //Calling the constructor
    regSubmitButton.href='./welcome.html';
}
handelSubmit();
