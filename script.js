const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const eye = document.getElementById('eye');
const loginForm = document.getElementById('loginForm');



eye.addEventListener('click', ()=>{
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        eye.src = 'img/visibility_24dp_000000_FILL0_wght400_GRAD0_opsz24.png';
    }else{
        passwordInput.type = 'password';
        eye.src= 'img/Eye.png';
    }
})

function Details() {
    const defaultUsername = '12345';
    const defaultPassword = '12345';

    if(!localStorage.getItem('username') || !localStorage.getItem('password')) {
        localStorage.setItem('username', defaultUsername);
        localStorage.setItem('password', defaultPassword);
        console.log('Данные были добавлены ранее');
    }
}

function loginparol(username, password) {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    return username === storedUsername && password === storedPassword;
}

loginForm.addEventListener  ('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    if(loginparol(username, password)) {
        window.location.href = "account.html";
    } else {
        alert('Логин или пароль введены неверно');
    }
});

function check(){
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    submitButton.disabled = !(username && password);
};

Details();

usernameInput.addEventListener('input', check);
passwordInput.addEventListener('input', check);