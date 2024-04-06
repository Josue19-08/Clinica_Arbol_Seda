document.addEventListener("DOMContentLoaded", function () {

    function verificarSesionIniciada() {
        var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        return usuarios.some(function (usuario) {
            return usuario.inicio === true;
        });
    }

    if (verificarSesionIniciada()) {
        // Si no hay una sesión iniciada, redirigir a la página de inicio de sesión
        window.location.href = '../index.html';
    } else {


        // Obtener referencia al formulario
        var formulario = document.getElementById('formulario');

        // Agregar evento submit al formulario
        formulario.addEventListener('submit', function (event) {
            // Detener el envío del formulario
            event.preventDefault();

            // Obtener valores de los campos del formulario
            var cedula = document.getElementById('usuario').value;
            var contrasenna = document.getElementById('contrasenna').value;



            function validarCedula(cedula) {
                // Validar que la cédula tenga el formato ##-####-####
                var cedulaExpReg = /^\d{2}-\d{4}-\d{4}$/;
                return cedulaExpReg.test(cedula);
            }

            validarCedula(cedula);
            // Encriptar la contraseña
            var contrasennaEncriptada = CryptoJS.SHA256(contrasenna).toString();

            // Obtener usuarios almacenados en localStorage
            var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            // Buscar el usuario por cédula y contraseña encriptada
            var usuarioEncontrado = usuarios.find(function (u) {
                return u.cedula === cedula && u.contrasenna === contrasennaEncriptada;
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
    }

});
