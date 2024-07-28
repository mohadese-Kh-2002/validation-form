const $ = document;

const inputsElem = $.querySelectorAll(".form__input");
const wrapperInputElem = $.querySelector(".wrapper__input");
const username = $.querySelector("#username");
const email = $.querySelector("#email");
const password = $.querySelector("#password");
const repassword = $.querySelector("#repassword");
const usernameProblem = $.querySelector(".username-problem");
const emailProblem = $.querySelector(".email-problem");
const passwordProblem = $.querySelector(".password-problem");
const repasswordProblem = $.querySelector(".repassword-problem");
const submitBtn = $.querySelector(".form__submit");
const eyePassword = $.querySelector(".eye-password");
const eyeRepassword = $.querySelector(".eye-repassword");
const problemLogin=$.querySelector('.problemLogin')
const textContentEmpty = (empty) => {
    empty.textContent = "";
};
let usernameCheck = false;
let emailCheck = false;
let passwordCheck = false;
let repasswordCheck = false;
inputsElem.forEach((input) => {
    input.addEventListener("focus", (e) => {
        input.parentElement.style.cssText = "padding-bottom:1.5rem";
    });
    input.addEventListener("blur", (e) => {
        input.parentElement.style.cssText = "padding-bottom:0rem";
    });
});

username.addEventListener("keyup", (e) => {
    let regex = /^\w{6,}$/;
    if (regex.test(username.value) == false) {
        usernameProblem.textContent = "Username must be at least 6 characters";
    } else {
        textContentEmpty(usernameProblem);
        usernameCheck = true;
    }
});

email.addEventListener("keyup", (e) => {
    let regex = /^\w*@(gmail|yahoo).com$/;
    if (regex.test(email.value) == false) {
        emailProblem.textContent = "Email must be valid";
    } else {
        textContentEmpty(emailProblem);
        emailCheck = true;
    }
});

password.addEventListener("keyup", (e) => {
    let regex = /^\w{8,}$/;
    if (regex.test(password.value) == false) {
        passwordProblem.textContent =
            "Password must be at least 8 characters long ";
    } else {
        textContentEmpty(passwordProblem);
        passwordCheck = true;
    }
});

repassword.addEventListener("keyup", (e) => {
    console.log(repassword.value);
    console.log(password.value);
    if (repassword.value !== password.value) {
        repasswordProblem.textContent = "Password do not match";
    } else {
        textContentEmpty(repasswordProblem);
        repasswordCheck = true;
    }
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (usernameCheck && emailCheck && passwordCheck && repasswordCheck) {
        username.value = "";
        email.value = "";
        password.value = "";
        repassword.value = "";
        textContentEmpty(problemLogin)
    }else{
        problemLogin.textContent='Check above'
    }
});

let hide = true;
eyePassword.addEventListener("click", (e) => {
 controlEye(eyePassword,password)
});
eyeRepassword.addEventListener("click", (e) => {
   controlEye(eyeRepassword,repassword)
});
function controlEye(eye, input) {
    if (hide) {
        eye.firstElementChild.classList.remove("fa-eye");
        eye.firstElementChild.classList.add("fa-eye-slash");
        input.setAttribute("type", "text");
        hide = false;
    } else {
        eye.firstElementChild.classList.remove("fa-eye-slash");
        eye.firstElementChild.classList.add("fa-eye");
        input.setAttribute("type", "password");
        hide = true;
    }
}
