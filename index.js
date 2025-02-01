const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const correctoMessage = document.getElementById('correctoMessage');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === 'hola@gmail.com' && password === '123456') {
        emailError.textContent = '';
        passwordError.textContent = '';
        correctoMessage.textContent = 'Correcto';
        correctoMessage.classList.remove('hidden');
        correctoMessage.style.color = 'green';
        correctoMessage.style.fontSize = '20px';
        correctoMessage.style.textAlign = 'center';
    } else {
        correctoMessage.classList.add('hidden');

        if (email !== 'hola@gmail.com') {
            emailError.textContent = 'El correo no es válido.';
        } else {
            emailError.textContent = '';
        }

        if (password !== '123456') {
            passwordError.textContent = 'La contraseña no es válida.';
        } else {
            passwordError.textContent = '';
        }
    }
});
