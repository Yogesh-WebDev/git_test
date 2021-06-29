//Form validation

let registrationForm=document.querySelector('#register-form');
registrationForm.addEventListener('submit',function (event) {
    event.preventDefault();

    if (validateForm()) {
        alert('Form is submitted successfully');
    }
})

let validateForm=()=>{
    return(
        checkEmail() &
        checkZipCode() &
        checkCountry() &
        checkPassword() &
        checkConfirmPassword() 
    );
}
let checkEmail=()=>{
    let inputEl=document.querySelector('#email');
    let inputFeedbackEl=document.querySelector('#email-feedback');
    let regExp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regExp.test(inputEl.value)) {
        makeValid(inputEl,inputFeedbackEl);
        return true;
    } else {
        makeInValid(inputEl,inputFeedbackEl);
        return false;
    }
}
let checkZipCode=()=>{
    let inputEl=document.querySelector('#zipCode');
    let inputFeedbackEl=document.querySelector('#zipCode-feedback');
    let regExp=/^[1-9][0-9]{5}$/;
    if (regExp.test(inputEl.value)) {
        makeValid(inputEl,inputFeedbackEl);
        return true;
    } else {
        makeInValid(inputEl,inputFeedbackEl);
        return false;
    }
}
let checkCountry=()=>{
    let inputEl=document.querySelector('#country');
    let inputFeedbackEl=document.querySelector('#country-feedback');
    let regExp='India';
    if (regExp ===inputEl.value) {
        makeValid(inputEl,inputFeedbackEl);
        return true;
    } else {
        makeInValid(inputEl,inputFeedbackEl);
        return false;
    }
}
let checkPassword = () => {
    let inputEl=document.querySelector('#password');
    let inputFeedbackEl=document.querySelector('#password-feedback');
    let regExp=/^[A-Za-z]\w{7,14}$/;
    if (regExp.test(inputEl.value)) {
        makeValid(inputEl , inputFeedbackEl);
        return true;
    }else{
        makeInValid(inputEl , inputFeedbackEl);
        return false;
    }
};
let checkConfirmPassword = () => {
    let inputEl=document.querySelector('#c-password');
    let passwordEl=document.querySelector('#password');
    let inputFeedbackEl=document.querySelector('#c-password-feedback');
    let regExp=/^[A-Za-z]\w{7,14}$/;
    if (regExp.test(inputEl.value) && inputEl.value === passwordEl.value) {
        makeValid(inputEl , inputFeedbackEl);
        return true;
    }else{
        makeInValid(inputEl , inputFeedbackEl);
        return false;
    }
};
//make valid
let makeValid = (inputEl , inputFeedbackEl) => {
    inputEl.classList.add('is-form-valid');
    inputEl.classList.remove('is-form-invalid');
    inputFeedbackEl.classList.add('text-success');
    inputFeedbackEl.classList.remove('text-danger');
    inputFeedbackEl.innerText='Looks Good';
};
//make invalid
let makeInValid = (inputEl , inputFeedbackEl) => {
    inputEl.classList.remove('is-form-valid');
    inputEl.classList.add('is-form-invalid');
    inputFeedbackEl.classList.remove('text-success');
    inputFeedbackEl.classList.add('text-danger');
    inputFeedbackEl.innerText=`Please enter a ${inputEl.placeholder}`;
};

//zipcode field with keyup event
let zipcodeEl=document.querySelector('#zipCode');
zipcodeEl.addEventListener('keyup',function(){
    checkZipCode();
});
//email field with keyup event
let emailEl=document.querySelector('#email');
emailEl.addEventListener('keyup',function(){
    checkEmail();
});

//country field with keyup event
let countryEl=document.querySelector('#country');
countryEl.addEventListener('keyup',function(){
    checkCountry();
});
//password field with keyup event
let passwordEl=document.querySelector('#password');
passwordEl.addEventListener('keyup',function(){
    checkPassword();
});
//Confirm password field with keyup event
let confirmPasswordEl=document.querySelector('#c-password');
confirmPasswordEl.addEventListener('keyup',function(){
    checkConfirmPassword();
});