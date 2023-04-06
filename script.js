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
function messageHandler(inputType, message){
    let inputControl = inputType.parentElement;
    let errorMessage = inputControl.querySelector('.error-msg');
    errorMessage.innerText = message;
}

function inputCheck(){
    if(firstName.value === ''){
        firstName.classList.add('fail');
        messageHandler(firstName, "First name is required.")
    } else if(!isNameValid(firstName.value)){
        firstName.classList.add('fail');
        messageHandler(firstName, "Name must be alphabetic only.")
    } 
    else{
        firstName.classList.remove('fail');
        firstName.classList.add('success');
        messageHandler(firstName, ' ');
    }

    if(lastName.value === ''){
        lastName.classList.add('fail');
        messageHandler(lastName, "Last name is required.");
    }else if(!isNameValid(lastName.value)){
        lastName.classList.add('fail');
        messageHandler(lastName, "Last name must be alphabetic only.")
    }else{
        lastName.classList.remove('fail');
        lastName.classList.add('success');
        messageHandler(lastName, ' ');
    }

    if (email.value === ''){
        email.classList.add('fail');
        messageHandler(email, "Email is required.");
    }else if(!isEmailValid(email.value)){
        email.classList.add('fail');
        messageHandler(email, "Invalid email format.")
    }
    else{
        email.classList.remove('fail');
        email.classList.add('success');
        messageHandler(email, ' ');
    }

    if (phone.value === ''){
        phone.classList.add('fail');
        messageHandler(phone, "Phone field is required.");
    }else if(!isPhoneValid(phone.value)){
        phone.classList.add('fail');
        messageHandler(phone, "Invalid phone number format.")
    }
    else{
        phone.classList.remove('fail');
        phone.classList.add('success');
        messageHandler(phone, ' ');
    }

    if (password.value === ''){
        password.classList.add('fail');
        messageHandler(password, "Password is required.");
    }else{
        password.classList.remove('fail');
        password.classList.add('success');
        messageHandler(password, ' ');
    }

    if (password2.value === ''){
        password2.classList.add('fail');
        messageHandler(password2, "Password confirmation is required.");
    } else if(password.value !== password2.value){
        password2.classList.add('fail');
        messageHandler(password2, "Passwords do not match.");
        password.classList.add('fail');
        messageHandler(password, "Passwords do not match.");
    }
    else{
        password2.classList.remove('fail');
        password2.classList.add('success');
        messageHandler(password2, ' ');
    } 
}

