var formRegister = document.querySelector("#register")
var password1 = document.querySelector("#password")
var password2 = document.querySelector("#password-repeater")
var birthday = document.querySelector("#birthday")

var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('password-repeater').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
    }
  }

  function customSubmit(event) {
    event.preventDefault()

    let SamePasswords = password1.value === password2.value
    if (!SamePasswords) {
        password2.setCustomValidity("Passwords are not identical.")
        password2.reportValidity()
        return
    }else{
        password2.setCustomValidity("")
        password2.reportValidity()
    }

   
  }