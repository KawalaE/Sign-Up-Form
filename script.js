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

function inputCheck(){
    if(firstName.value === '' || !isNameValid(firstName.value)){
        firstName.classList.add('fail');
    } else{
        firstName.classList.remove('fail');
        firstName.classList.add('success');
    }

    if(lastName.value === ''|| !isNameValid(firstName.value)){
        lastName.classList.add('fail');
    }else{
        lastName.classList.remove('fail');
        lastName.classList.add('success');
    }

    if (email.value === '' || !isEmailValid(email.value)){
        email.classList.add('fail');
    }else{
        email.classList.remove('fail');
        email.classList.add('success');
    }

    if (phone.value === '' || !isPhoneValid(phone.value)){
        phone.classList.add('fail');
    }else{
        phone.classList.remove('fail');
        phone.classList.add('success');
    }

    if (password.value === ''){
        password.classList.add('fail');
    }else{
        password.classList.remove('fail');
        password.classList.add('success');
    }

    if (password2.value === ''){
        password2.classList.add('fail');
    }else{
        password2.classList.remove('fail');
        password2.classList.add('success');
    } 
}

