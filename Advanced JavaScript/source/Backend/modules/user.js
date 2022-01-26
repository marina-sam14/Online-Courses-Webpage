var name;
var email;
var password;
var phone;
var address;
var country;
var education;
var surname;
var username;
var conf_password;

let users= [];

function getbyName() {
    if (users.contain(name)){
        console.log("This name already exists")
    }
    else {
        users.add(name);
    }
}

function getbySurname() {
    if (users.contain(surname)){
        console.log("This surname already exists")
    }
    else {
        users.add(surname);
    }
}

function getbyUsername() {
    if (users.contain(username)){
        console.log("This username already exists")
    }
    else {
        users.add(username);
    }
}

function getbyEmail() {
    if (users.contain(email)){
        console.log("This email already exists")
    }
    else {
        users.add(email);
    }
}
