// getting form inputs
const firstName = document.forms["myForm"]["fname"];
const lastName = document.forms["myForm"]["lname"];
const password = document.forms["myForm"]["pswd"];
const confirmPassword = document.forms["myForm"]["confirmpswd"];
const email = document.forms["myForm"]["email"];
const age = document.forms["myForm"]["age"];
const contactNumber = document.forms["myForm"]["contactNum"];
const btn = document.getElementById("submitBtn");

//adding event listener to call functions for validation
firstName.addEventListener("focusout", validateFirstName)
lastName.addEventListener("focusout", validateLastName)
password.addEventListener("focusout", validatePassword)
confirmPassword.addEventListener("focusout", validateConfirmPassword)
email.addEventListener("focusout", validateEmail)
age.addEventListener("focusout", validateAge)
contactNumber.addEventListener("focusout", validateContactNumber)
btn.addEventListener("click", validateInput)

// disabling submit button 
btn.disabled = true;
// function to validate first name
function validateFirstName() {
    let _firstName = firstName.value;
    if (_firstName.length <= 0) {
        document.getElementById("fnameerrorMsg").innerHTML = "*Field must be filled";
        btn.disabled = true;
    }
    else {
        btn.disabled = false;
        document.getElementById("fnameerrorMsg").innerHTML = " ";
        return true
    }
}
// function to validate last name
function validateLastName() {
    let _lastName = lastName.value;
    if (_lastName.length <= 0) {
        document.getElementById("lnameerrorMsg").innerHTML = "*Field must be filled";
        btn.disabled = true;
    }
    else {
        btn.disabled = false;
        document.getElementById("lnameerrorMsg").innerHTML = " ";
        return true
    }
}
// function to validate password
function validatePassword() {
    let _password = password.value;
    // reg exp to validate password
    const passRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (_password.length < 8 || !(_password.match(passRegEx))) {
        document.getElementById("passerrorMsg").innerHTML = "*Password should have min length of 8, Should have both alphabetic and numeric, Should have at-least one uppercase and lowercase";
        btn.disabled = true;
    }
    else {
        btn.disabled = false;
        document.getElementById("passerrorMsg").innerHTML = " ";
        return true

    }
}
// function to validate confirm password
function validateConfirmPassword() {
    let _password = password.value;
    let _confirmPassword = confirmPassword.value;
    if (_confirmPassword !== _password) {
        document.getElementById("confirmpasserrorMsg").innerHTML = "*Confirm Password must match password";
        btn.disabled = true;
    }
    else {
        btn.disabled = false;
        document.getElementById("confirmpasserrorMsg").innerHTML = " ";
        return true
    }
}
// function to validate emails
function validateEmail() {
    let _email = email.value;
    // creating array of multiple emails
    let arrayOfEmails = [];

    // splitting multiple emails 
    arrayOfEmails = _email.split(",");
    // reg exp to validate email
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    for (let e = 0; e < arrayOfEmails.length; e++) {
        if (arrayOfEmails[e].length <= 0) {
            document.getElementById("emailerrorMsg").innerHTML = "*Field must be filled";
            btn.disabled = true;
            break;
        }
        else if (!arrayOfEmails[e].match(emailRegEx)) {
            document.getElementById("emailerrorMsg").innerHTML = "*Invalid Email";
            btn.disabled = true;
            break;
        }
        else {
            btn.disabled = false;
            document.getElementById("emailerrorMsg").innerHTML = " ";
            return true
        }
    }
}
// function to validate age
function validateAge() {
    let _age = age.value;
    if (_age.length <= 0 | _age < 18 || age > 150) {
        document.getElementById("ageerrorMsg").innerHTML = "*age can not be blank and must be between 18 and 150";
        btn.disabled = true;
    }
    else {
        btn.disabled = false;
        document.getElementById("ageerrorMsg").innerHTML = " ";
        return true
    }
}
// function to validate contact number
function validateContactNumber() {
    let _contactNumber = contactNumber.value;
    if (_contactNumber.length !== 11) {
        document.getElementById("contacterrorMsg").innerHTML = "*Contact Must be 11 digit long";
        btn.disabled = true;
    }
    else {

        document.getElementById("contacterrorMsg").innerHTML = " ";
        btn.disabled = false;
        return true
    }
}
function validateInput() {
    // if (!(firstName.value.length == 0) && !(lastName.value.length == 0) && !(age.value.length == 0) && !(password.value.length == 0) && !(confirmPassword.value.length == 0) && !(contactNumber.value.length == 0) && !(email.value.length == 0)) {
    //     alert("successfully submitted!")
    //     document.getElementById("myForm").reset();
    // }
    // else{
    //     alert("All fields need")
    // }
    if (validateFirstName() && validateLastName() && validateEmail() && validateAge() && validatePassword() && validateConfirmPassword() && validateContactNumber()) {
        btn.disabled = false;
        alert("successfully submitted!")
        document.getElementById("myForm").reset();

    }
    else {
        btn.disabled = true;
    }
}