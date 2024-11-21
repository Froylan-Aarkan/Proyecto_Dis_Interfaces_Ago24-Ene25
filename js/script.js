const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {
    // Alterna el tipo de input entre 'password' y 'text'
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Cambia el ícono según el estado
    const icon = type === 'password' ? 'assets/svgs/eye-slash-fill.svg' : 'assets/svgs/eye-fill.svg';
    togglePassword.setAttribute('src', icon);
});