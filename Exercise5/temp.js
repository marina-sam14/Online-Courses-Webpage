const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password-repeat');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkInput([name,surname,username, email, password1, password2]);

    if (!validateEmail(email.value.trim())) {
        showerror(email, 'e-mail is not corrected');
    } else {
        showsuccess(email);
    }
    checkPassword(password1, password2);
    checkInputLength(username, 5, 10);
    checkInputLength(username, 5, 30);
    checkInputLength(username, 5, 10);
    checkInputLength(password1, 5, 12);

});

function showerror(input, message) {
    const formControl = input.parentElement; //Work under main element (username under class=form-control)
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showsuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkInput(inputArray) {
    inputArray.forEach(function(input) {
        if (input.value.trim() === '') {
            showerror(input, `Please complete ${getInputCase(input)}`);
        } else {
            showsuccess(input);
        }
    });
}

function getInputCase(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}

function checkPassword(password1, password2) {
    if (password1.value !== password2.value) {
        showerror(password2, 'Password is not match')
    }
}

function checkInputLength(input, min, max) {
    if (input.value.length <= min) {
        showerror(input, `${getInputCase(input)} username should be more than ${min} characters`)
    } else if (input.value.length > max) {
        showerror(input, `${getInputCase(input)} username should be less than ${max} characters`)
    } else {
        showsuccess(input);
    }

}