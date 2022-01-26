
const form = document.getElementById('form');

const firstName = document.querySelector("#name");
const lastName = document.querySelector("#surname");
const address = document.querySelector("#address");
const Email = document.querySelector("#email");
const userName = document.querySelector("#username");
const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password-repeat");




form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();


});

// Methods for validation
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = " ";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Check if email has the necessary characters like @ or .
const isValidEmail = Email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(Email).toLowerCase());
};

// Password permission. It must have at least 8 characters and includes a special character too.
var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;



// Constraint API
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

const validateAddress = () => {
    if (address.value.length === 0) {
        lastName.setCustomValidity("This field cannot be empty.");
    } else {
        address.setCustomValidity(""); // be sure to leave this empty!


    }
};




// Custom Validity
const validateInputs = () => {
    const usernameValue = userName.value.trim();
    const emailValue = Email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
    var i = 0;




    // Check if field has less than 8 characters

    if (usernameValue.length < 8) {
        setError(userName, "Username must be at least 8 characters!");
        i -= 1;
    }

    else {
        setSuccess(userName);
        i += 1;


    }

    // Check if the provided email has the necessary characters.
    if (!isValidEmail(emailValue)) {
        setError(Email, "Enter a valid email address please");
        i -= 1;


    }
    else {
        setSuccess(Email);
        i += 1;


    }

    // Check if the provided password has the necessary characters.
    if (!regularExpression.test(password1Value)) {
        setError(password1, "Password must be at least 8 characters, contain at least one letter and digit.");
        i -= 1;



    }
    else {
        setSuccess(password1);
        i += 1;


    }

    // Check if the two password have the same value
    if (password2Value != password1Value) {
        setError(password2, "Passwords don't match!");
        i -= 1;


    }
    else {
        setSuccess(password2);
        i += 1;



    }
    console.log(i);
    if (i == 4) {
        alert("Succesful Registration");
    }

};



