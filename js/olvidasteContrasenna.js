document.addEventListener("DOMContentLoaded", function() {
    var formularioRecuperacion = document.getElementById('formulario-recuperacion');
    var mensaje = document.getElementById('mensaje');
    var cedula = document.getElementById('cedula').value;

    function validarCedula(cedula) {
        // Validar que la cédula tenga el formato ##-####-####
        var cedulaExpReg = /^\d{2}-\d{4}-\d{4}$/;
        return cedulaExpReg.test(cedula);
    }

    formularioRecuperacion.addEventListener('submit', function(event) {
        event.preventDefault();
        var cedula = document.getElementById('cedula').value;
        // Verificar si la cédula existe en la base de datos de usuarios
        var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        var usuarioEncontrado = usuarios.find(function(u) {
            return u.cedula === cedula;
        });
        if (usuarioEncontrado) {
            // Aquí enviarías el correo electrónico al correo del usuario encontrado
            alert('Se ha enviado un correo para restablecer la contraseña');
        } else {
            alert('No se encontró ningún usuario con el número de cédula digitado');
        }
    });

});


