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

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('iniciar-sesion');

    // Prevenir el comportamiento predeterminado del formulario y redirigir
    loginButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el envío del formulario
        // Redirige a la página principal (ajusta la URL según tu estructura de proyecto)
        window.location.href = 'menu_principal_coordinador.html';
    });
});