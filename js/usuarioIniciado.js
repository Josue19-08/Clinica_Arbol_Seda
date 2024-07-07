document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al elemento de estado de sesión
    var estadoSesion = document.getElementById('estadoSesion');
    // Obtener referencia al elemento de cerrar sesión
    var cerrarSesion = document.getElementById('cerrarSesion');

    // Verificar si el elemento "cerrarSesion" está presente antes de agregar el event listener
    if (cerrarSesion) {
        // Función para cerrar la sesión
        cerrarSesion.addEventListener('click', function() {
            // Obtener todos los usuarios del localStorage
            var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            
            // Iterar sobre cada usuario y establecer inicio en falso
            usuarios.forEach(function (usuario) {
                usuario.inicio = false;
            });

            // Guardar los cambios actualizados en el localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            // Recargar la página para reflejar los cambios
            location.reload();
            // Obtener la URL de la página actual
            var paginaActual = window.location.href;

            // Verificar si la página actual no es index.html
            if (paginaActual.indexOf("index.html") === -1) {
                // Si no es index.html, redirigir a otra página
                window.location.href = "../index.html";
            } else {
                window.location.href = "index.html";
            }

        });
    }

    // Función para verificar si hay una sesión iniciada
    function verificarSesionIniciada() {
        var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        return usuarios.some(function(usuario) {
            return usuario.inicio === true;
        });
    }

    // Obtener el usuario actualmente iniciado de localStorage
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    var usuarioActual = usuarios.find(function(u) {
        return u.inicio === true;
    });

    // Verificar si hay un usuario iniciado y actualizar el elemento de estado de sesión
    if (usuarioActual) {
        estadoSesion.textContent = "¡Bienvenido, " + usuarioActual.nombre + "!";
    } else {
        estadoSesion.textContent = "Sin inicio de sesión";
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const menu = document.getElementById('menu');

    menuHamburguesa.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
