let firstName = document.getElementById('user_name');
let lastName = document.getElementById('user_last_name');
let email = document.getElementById('email');
let phone = document.getElementById('user_phone')
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let form = document.getElementById('form');
let message = document.getElementsByClassName('error');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    inputCheck();
});

function isNameValid(e){
    return  (/^[A-Za-z]+$/).test(String(e));
}
function isEmailValid(e){
    return  (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(String(e));
}
function isPhoneValid(e){
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/).test(String(e));
}
function mesageHandler(inputType, message){
    let inputControl = inputType.parentElement;
    let errorMessage = inputControl.querySelector('.error-msg');

    errorMessage.innerText = message;
}

function inputCheck(){
    if(firstName.value === ''){
        firstName.classList.add('fail');
        errorHandler(firstName, "First name cannot be empty.")
    } else{
        firstName.classList.remove('fail');
        firstName.classList.add('success');
        errorHandler(firstName, ' ');
    }

    if(lastName.value === ''){
        lastName.classList.add('fail');
        errorHandler(lastName, "Last name cannot be empty.");
    }else{
        lastName.classList.remove('fail');
        lastName.classList.add('success');
        errorHandler(lastName, ' ');
    }

    if (email.value === '' || !isEmailValid(email.value)){
        email.classList.add('fail');
        errorHandler(email, "Email field cannot be empty.");
    }else{
        email.classList.remove('fail');
        email.classList.add('success');
        errorHandler(email, ' ');
    }

    if (phone.value === ''){
        phone.classList.add('fail');
        errorHandler(phone, "Phone field cannot be empty.");
    }else{
        phone.classList.remove('fail');
        phone.classList.add('success');
        errorHandler(phone, ' ');
    }

    if (password.value === ''){
        password.classList.add('fail');
        errorHandler(password, "Password field cannot be empty.");
    }else{
        password.classList.remove('fail');
        password.classList.add('success');
        errorHandler(password, ' ');
    }

    if (password2.value === ''){
        password2.classList.add('fail');
        errorHandler(password2, "Password confirmation cannot be empty.");
    }else{
        password2.classList.remove('fail');
        password2.classList.add('success');
        errorHandler(password2, ' ');
    } 
}

