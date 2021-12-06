function passwordValidation(){
    let password = document.getElementById("password").value;
    let repatPassword = document.getElementById("password-repeat").value;

    if (password !== repatPassword) {
        repatPassword.setCustomValidity("Please re-enter password");
        return false
    }
    return true;
}
