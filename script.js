let firstName = document.getElementById('user_name');
let lastName = document.getElementById('user_last_name');
let email = document.getElementById('email');
let phone = document.getElementById('user_phone')
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let form = document.getElementById('form');
let correctInputs = 0;

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
function isPasswordValid(e){
    return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,14}$/).test(String(e));
}
function messageHandler(inputType, message){
    let inputControl = inputType.parentElement;
    let errorMessage = inputControl.querySelector('.error-msg');
    errorMessage.innerText = message;
}

password.addEventListener('focus', () =>{
    messageHandler(password, 'Password should have between 7 to 14 characters. One of them must be a letter, one of them must be a number and one of them must be a special character.');
    document.getElementById('pswd').classList.add('password-msg');
})
password.addEventListener('blur', () =>{
    messageHandler(password, '');
    document.getElementById('pswd').classList.remove('password-msg');
})
password.addEventListener('input', () =>{
    password.classList.add('fail');
    if(isPasswordValid(password.value)){
        password.classList.add('success');
        password.classList.remove('fail');
    }
})
password2.addEventListener('input', () =>{
    password2.classList.add('fail');
    if(password.value === password2.value){
        password2.classList.add('success');
        password2.classList.remove('fail');
        messageHandler(password2, '');
    }
})

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
        correctInputs +=1;
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
        correctInputs +=1;
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
        correctInputs +=1;
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
        correctInputs +=1;
    }
    if (password.value === ''){
        password.classList.add('fail');
        messageHandler(password, "Password is required.");
    }else if(!isPasswordValid(password.value)){
        password.classList.add('fail');
        messageHandler(password, "Invalid password format.");

    }
    else{
        password.classList.remove('fail');
        password.classList.add('success');
        messageHandler(password, ' ');
        correctInputs +=1;
    }
    if (password2.value === ''){
        password2.classList.add('fail');
        messageHandler(password2, "Password confirmation is required.");

    }else if(!isPasswordValid(password.value)){
        password2.classList.add('fail');
        messageHandler(password2, "Invalid password format.");
    }else if(password.value !== password2.value){
        password2.classList.add('fail');
        messageHandler(password2, "Passwords do not match.");
        password.classList.add('fail');
        messageHandler(password, "Passwords do not match.");
    }
    else{
        password2.classList.remove('fail');
        password2.classList.add('success');
        messageHandler(password2, ' ');
        correctInputs +=1;
    }
    if(correctInputs == 6){
        alert("Your application has been submitted!");
    }
}

