document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById('formulario');
    var nuevaContrasenna = document.getElementById('nuevaContrasenna');
    var repiteContrasenna = document.getElementById('repiteContrasenna');

    function validarContrasenna(contrasenna) {
        var contrasennaExpReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,11}$/;
        return contrasennaExpReg.test(contrasenna);
    }

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        if (nuevaContrasenna.value !== repiteContrasenna.value) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        if (!validarContrasenna(nuevaContrasenna.value)) {
            alert('La contraseña debe tener al menos una mayúscula, una minúscula, un número, un carácter especial y no debe exceder los 11 caracteres.');
            return;
        }

        var parametros = new URLSearchParams(window.location.search);
        var email = parametros.get('email');
        if (!email) {
            alert('No se encontró el email en el enlace.');
            return;
        }

        var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        var usuarioEncontrado = usuarios.find(function(usuario) {
            return usuario.correo === email;
        });

        if (usuarioEncontrado) {
            usuarioEncontrado.contrasenna = CryptoJS.SHA256(nuevaContrasenna.value).toString();
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            alert('Contraseña actualizada correctamente.');
            window.location.href = 'inicioSesion.html';
        } else {
            alert('No se encontró un usuario con ese correo.');
        }
    });
});
