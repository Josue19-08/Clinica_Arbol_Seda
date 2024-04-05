document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al formulario
    var formulario = document.getElementById('formulario');

    // Agregar evento submit al formulario
    formulario.addEventListener('submit', function(event) {
        // Detener el envío del formulario
        event.preventDefault();

        // Obtener valores de los campos del formulario
        var cedula = document.getElementById('cedula').value;
        var nombre = document.getElementById('nombre').value;
        var apellidos = document.getElementById('apellidos').value;
        var celular = document.getElementById('celular').value;
        var correo = document.getElementById('correo').value;
        var contrasenna = document.getElementById('contrasenna').value;
        var confirmarContrasenna = document.getElementById('confiContrasenna').value;

        // Validar que las contraseñas coincidan
        if (contrasenna !== confirmarContrasenna) {
            alert('Las contraseñas no coinciden. Por favor, verifíquelas.');
            return;
        }

        // Validar los campos del formulario
        if (!validarCedula(cedula) || !validarNombre(nombre) || !validarApellidos(apellidos) || !validarCelular(celular) || !validarCorreo(correo) || !validarContrasenna(contrasenna, confirmarContrasenna)) {
            alert('Por favor, complete correctamente todos los campos del formulario.');
            return;
        }

        // Crear objeto de usuario con el nuevo campo "inicio"
        var usuario = {
            cedula: cedula,
            nombre: nombre,
            apellidos: apellidos,
            celular: celular,
            correo: correo,
            contrasenna: contrasenna,
            inicio: false // Nuevo campo para verificar inicio de sesión
        };

        // Verificar si el usuario ya existe en el localStorage
        var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        if (usuarios.some(function(u) { return u.cedula === cedula; })) {
            alert('El usuario ya está registrado en el sistema.');
            return;
        }

        // Guardar usuario en el localStorage
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // Limpiar el formulario
        formulario.reset();
        alert('¡Usuario registrado exitosamente!');
    });

    // Funciones de validación de campos (se mantienen igual)
    function validarCedula(cedula) {
        // Validar que la cédula tenga el formato ##-####-####
        var cedulaExpReg = /^\d{2}-\d{4}-\d{4}$/;
        return cedulaExpReg.test(cedula);
    }

    function validarNombre(nombre) {
        // Validar que la longitud del nombre sea máximo 20 caracteres
        return nombre.length <= 20;
    }

    function validarApellidos(apellidos) {
        // Validar que la longitud de los apellidos sea máximo 30 caracteres
        return apellidos.length <= 30;
    }

    function validarCelular(celular) {
        // Validar que el celular tenga el formato ####-####
        var celularExpReg = /^\d{4}-\d{4}$/;
        return celularExpReg.test(celular);
    }

    function validarCorreo(correo) {
        // Validar que el correo electrónico tenga el formato ##@####.###
        var correoExpReg = /^\S+@\S+\.\S+$/;
        return correoExpReg.test(correo);
    }

    function validarContrasenna(contrasenna, confirmarContrasenna) {
        // Validar que la contrasenna tenga al menos una mayúscula, una minúscula, números, un carácter especial y máximo 11 caracteres
        var contrasennaExpReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,11}$/;
        return contrasennaExpReg.test(contrasenna) && contrasenna === confirmarContrasenna;
    }
});
