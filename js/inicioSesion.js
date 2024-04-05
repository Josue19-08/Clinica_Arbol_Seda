document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al formulario
    var formulario = document.getElementById('formulario');

    // Agregar evento submit al formulario
    formulario.addEventListener('submit', function(event) {
        // Detener el envío del formulario
        event.preventDefault();

        // Obtener valores de los campos del formulario
        var cedula = document.getElementById('usuario').value;
        var contrasenna = document.getElementById('contrasenna').value;

        // Obtener usuarios almacenados en localStorage
        var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Buscar el usuario por cédula y contraseña
        var usuarioEncontrado = usuarios.find(function(u) {
            return u.cedula === cedula && u.contrasenna === contrasenna;
        });

        // Verificar si se encontró el usuario
        if (usuarioEncontrado) {
            usuarioEncontrado.inicio = true; // Cambiar el valor de 'inicio' a true
            // Guardar los cambios en localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            alert('¡Inicio de sesión exitoso, bienvenido ' + usuarioEncontrado.nombre + '!');
            window.location.href = "../index.html";
        } else {
            alert('Cédula o contraseña incorrecta. Por favor, inténtalo de nuevo.');
        }
    });
});
