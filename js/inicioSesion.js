document.addEventListener("DOMContentLoaded", function () {
    const MAX_ATTEMPTS = 3;
    const BLOCK_TIME = 90000; // 1 minute 30 seconds in milliseconds

    function verificarSesionIniciada() {
        var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        return usuarios.some(function (usuario) {
            return usuario.inicio === true;
        });
    }

    function obtenerIntentosFallidos() {
        return JSON.parse(localStorage.getItem('intentosFallidos')) || { count: 0, lastAttempt: null };
    }

    function guardarIntentosFallidos(intentos) {
        localStorage.setItem('intentosFallidos', JSON.stringify(intentos));
    }

    function calcularTiempoRestante(ultimoIntento) {
        const ahora = new Date().getTime();
        const tiempoTranscurrido = ahora - ultimoIntento;
        const tiempoRestante = BLOCK_TIME - tiempoTranscurrido;
        const segundosRestantes = Math.ceil(tiempoRestante / 1000);
        return segundosRestantes;
    }

    if (verificarSesionIniciada()) {
        window.location.href = '../index.html';
    } else {
        var formulario = document.getElementById('formulario');
        formulario.addEventListener('submit', function (event) {
            event.preventDefault();

            var cedula = document.getElementById('usuario').value;
            var contrasenna = document.getElementById('contrasenna').value;
            var intentos = obtenerIntentosFallidos();
            var ahora = new Date().getTime();

            if (intentos.count >= MAX_ATTEMPTS && (ahora - intentos.lastAttempt) < BLOCK_TIME) {
                const tiempoRestante = calcularTiempoRestante(intentos.lastAttempt);
                alert(`Demasiados intentos fallidos. Inténtalo de nuevo más tarde. Tiempo restante: ${tiempoRestante} segundos.`);
                return;
            }

            if ((ahora - intentos.lastAttempt) >= BLOCK_TIME) {
                intentos.count = 0;
            }

            var contrasennaEncriptada = CryptoJS.SHA256(contrasenna).toString();
            var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            var usuarioEncontrado = usuarios.find(function (u) {
                return u.cedula === cedula && u.contrasenna === contrasennaEncriptada;
            });

            if (usuarioEncontrado) {
                usuarioEncontrado.inicio = true;
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                alert('¡Inicio de sesión exitoso, bienvenido ' + usuarioEncontrado.nombre + '!');
                localStorage.removeItem('intentosFallidos');
                window.location.href = "../index.html";
            } else {
                intentos.count++;
                intentos.lastAttempt = ahora;
                guardarIntentosFallidos(intentos);
                alert('Cédula o contraseña incorrecta. Por favor, inténtalo de nuevo.');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const cedulaInput = document.getElementById('usuario');

    cedulaInput.addEventListener('input', function (e) {
        let value = this.value.replace(/\D/g, '');

        if (value.length > 10) {
            value = value.slice(0, 10);
        }

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
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const menu = document.getElementById('menu');

    menuHamburguesa.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const menu = document.getElementById('menu');

    menuHamburguesa.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
