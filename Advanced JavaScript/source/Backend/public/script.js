const form = document.getElementById('form');
//  function registerUser() {
//     console.log(document.forms[0].checkValidity())
 
    
//  }


const firstName = document.querySelector("#name");
const lastName = document.querySelector("#surname");
const email = document.querySelector("#email");
const userName = document.querySelector("#username");
const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password-repeat");




form.addEventListener('submit', e => {
    // e.preventDefault();

    validateInputs();
});

const setError =(element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess =(element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = " ";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
};

var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

const validateName = () => {
    if (firstName.value.length === 0) {
		firstName.setCustomValidity("This field cannot be empty.");
	} else {
		firstName.setCustomValidity(""); // be sure to leave this empty!

}
};

const validateSurname = () => {
    if (lastName.value.length === 0) {
		lastName.setCustomValidity("This field cannot be empty.");
	} else {
		lastName.setCustomValidity(""); // be sure to leave this empty!

}
};

const validateInputs = () => {
    const usernameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    

    if(usernameValue === "") {
        setError(userName, 'Please enter your username');
    }
    else if (usernameValue.length < 8){
        setError(userName,"Username must be at least 8 characters!");
    } 
    else {
        setSuccess(userName);
    }

    if (emailValue === ""){
        setError(Email,"Enter your email please");
    }

    else if (!isValidEmail(emailValue)) {
        setError(email,"Enter a valid email address please");
        
    }
    else  {
        setSuccess(email);

    }

    if (password1Value === ""){
        setError(password1,"Enter your password please");
    }
    else if (!regularExpression.test(password1Value)){
        setError(password1,"Password must be at least 8 characters, contain at least one letter and digit.");
        
        
    }
    else  {
        setSuccess(password1);

    }

    if (password2Value === ""){
        setError(password2,"Confirm your password please");
    }
    else if (password2Value != password1Value){
        setError(password2,"Passwords don't match!");
        
    }
    else  {
        setSuccess(password2);

    }

 
};


