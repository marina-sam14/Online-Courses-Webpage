// var form = document.getElementById("register")

// var inputList = document.getElementsByTagName("input")
// console.log(inputList.length)

// window.addEventListener('load',function(){


//     let btnSubmit = this.document.getElementsByClassName("submit")
//     btnSubmit.onclick=function(){
//         let txtCardNumber=document.getElementsById('payment-card')
//         let txtCardOwner = document.getElementById('payment-address')
//         console.log("Included")
//     }


// })

window.onload = main;

function main(){
    let txtCard = document.getElementById("payment-card")

    txtCard.onchange = function() {
        let valid = false

        if (!valid) {
            txtCard.setCustomValidity ("Card is invalid or the number is wrong")
        }
        else{
            this.setCustomValidity('')
        }
    }
}

function InvalidName(textbox) {

    if (textbox.validity.patternMismatch) {
        textbox.setCustomValidity('Name can only contain upper and lowercase letters. Try again');
    }
    else {
        textbox.setCustomValidity('');
    }
    return true;
}

function InvalidSurname(textbox) {

    if (textbox.validity.patternMismatch) {
        textbox.setCustomValidity('Surname can only contain upper and lowercase letters. Try again!');
    }
    else {
        textbox.setCustomValidity('');
    }
    return true;
}


function InvalidDate(textbox) {
    var date = this.getValue();
    var now = new Date();
    //Validate birth date some time before today's date and
    //within 120 years
    if (date === null) {
        textbox.setCustomValidity("Can't be empty");

    } else {
        false;
    }
}

// let cardValidatorError = document.querySelectorAll("#payment + span")
// cardValidatorError.innerHTML = <i class = "fas fa-exclamation-circle"></i>
//                                 'Invalid Card'

// const email = document.getElementById("email");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });
