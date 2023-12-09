const username = document.getElementById('username');
const password = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Verificar que ambos campos estén completos
    if (username.value.trim() === '' || password.value.trim() === '') {
        alert('Por favor, ingresa un usuario y una contraseña.');
    } else {
        const data = {
            username: username.value,
            password: password.value
        }

        // Simplemente redirigir al usuario a una página de bienvenida con su nombre
        window.location.href = `bienvenida.html?username=${encodeURIComponent(username.value)}`;
    }
});
