console.log("Validation started.");
const form = document.getElementById('form');

window.onload = function(){
    console.log("JS file loaded")
}




const birthDate = document.querySelector("#birthday")
const Email = document.querySelector("#email")
const userName = document.querySelector("#username")
const password1 = document.querySelector("#password")
const password2 = document.querySelector("#password-repeat")
const paymentCard = document.querySelector("#payment-card")



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError =(element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess =(element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = " ";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = Email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(Email).toLowerCase());
}

birthDate.max = new Date().toISOString().split("T")[0];

const validateInputs = () => {
    const usernameValue = userName.value.trim();
    const emailValue = Email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
    const paymentCardValue = paymentCard.value.trim();
    

    if(usernameValue === '') {
        setError(userName, 'Please enter your username');
    }
    else if (usernameValue.length < 8){
        setError(userName,"Username must be at least 8 characters!")
    } 
    else {
        setSuccess(userName);
    }

    if (emailValue === ' '){
        setError(Email,"Enter your email please");
    }

    else if (!isValidEmail(emailValue)) {
        setError(Email,"Enter a valid email address please");
        
    }
    else  {
        setSuccess(Email);

    }

    if (password1Value === ' '){
        setError(password1,"Enter your password please");
    }
    else if (password1Value.length < 8){
        setError(password1,"Password must be at least 8 characters!");
        
    }
    else  {
        setSuccess(password1);

    }

    if (password2Value === ' '){
        setError(password2,"Confirm your password please");
    }
    else if (password2Value != password1Value){
        setError(password2,"Passwords don't match!");
        
    }
    else  {
        setSuccess(password2);

    }

    if (paymentCardValue === ' '){
        setError(paymentCard,"Enter your payment card please");
    }
    else if (paymentCardValue.length < 16){
        setError(paymentCard,"Password must be at least 16 number!");
        
    }
    else  {
        setSuccess(paymentCard);

    }
};



