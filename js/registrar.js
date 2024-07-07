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
            if(!validarCedula(cedula)){
                alert("Cédula de Identidad: Debe cumplir con el formato ##-####-####");

                return;
            }
            if(!validarNombre(nombre)){
                alert("Nombre Completo: La longitud del campo debe ser máximo de 20 caracteres");

                return;
            }
            if(!validarApellidos(apellidos)){
                alert("Apellidos: La longitud del campo debe ser máximo de 30 caracteres");

                return;
            }
            if(!validarCelular(celular)){
                alert("Número de Celular: Debe cumplir con el formato ####-####");

                return;
            }
            if(!validarCorreo(correo)){
                alert("Correo Electrónico: Debe cumplir con el formato ##@####.###");

                return;
            }
            if(!validarContrasenna(contrasenna, confirmarContrasenna)){
                alert("Contraseña: \n- Debe cumplir con el formato que incluya al menos una mayúscula, una minúscula, números y un carácter especial y un máximo de 11 caracteres.\n- Se debe incluir un campo adicional en el formulario de registro para que los usuarios confirmen su contraseña.\n- La contraseña y su confirmación deben coincidir para completar el registro.\n- La contraseña debe ser cifrada con algún algoritmo de cifrado para proteger la información transmitida o almacenada en una base de datos.");

                return;
            }

        // Encriptar la contraseña
        var contrasennaEncriptada = CryptoJS.SHA256(contrasenna).toString();

        // Crear objeto de usuario con el nuevo campo "inicio"
        var usuario = {
            cedula: cedula,
            nombre: nombre,
            apellidos: apellidos,
            celular: celular,
            correo: correo,
            contrasenna: contrasennaEncriptada, // Guardar la contraseña encriptada
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

document.addEventListener('DOMContentLoaded', function() {
    const cedulaInput = document.getElementById('cedula');

    cedulaInput.addEventListener('input', function (e) {
        let value = this.value.replace(/\D/g, ''); // Remove non-numeric characters

        // Limit the length to 8 digits
        if (value.length > 10) {
            value = value.slice(0, 8);
        }

        // Apply the format ##-####-####
        if (value.length > 2 && value.length <= 6) {
            value = value.slice(0, 2) + '-' + value.slice(2);
        } else if (value.length > 6) {
            value = value.slice(0, 2) + '-' + value.slice(2, 6) + '-' + value.slice(6);
        }

        this.value = value;
    });

    cedulaInput.addEventListener('keypress', function (e) {
        if (!/[\d-]/.test(e.key)) {
            e.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const celularInput = document.getElementById('celular');

    celularInput.addEventListener('input', function (e) {
        let value = this.value.replace(/\D/g, ''); // Remove non-numeric characters

        // Limit the length to 8 digits
        if (value.length > 8) {
            value = value.slice(0, 8);
        }

        // Apply the format ####-####
        if (value.length > 4) {
            value = value.slice(0, 4) + '-' + value.slice(4);
        }

        this.value = value;
    });

    celularInput.addEventListener('keypress', function (e) {
        if (!/[\d-]/.test(e.key)) {
            e.preventDefault();
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const menu = document.getElementById('menu');

    menuHamburguesa.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

