document.addEventListener("DOMContentLoaded", function() {
    var tabla = document.getElementById('medicosTable');
    var cuerpoTabla = tabla.getElementsByTagName('tbody')[0];
    var filasPorPagina = 10; // Número de filas por página
    var paginaActual = 1;

    function mostrarPagina(pagina) {
        var indiceInicio = (pagina - 1) * filasPorPagina;
        var indiceFin = indiceInicio + filasPorPagina;
        var filas = cuerpoTabla.rows;

        for (var i = 0; i < filas.length; i++) {
            filas[i].style.display = (i >= indiceInicio && i < indiceFin) ? '' : 'none';
        }
    }

    function actualizarPaginacion() {
        var totalPaginas = Math.ceil(cuerpoTabla.rows.length / filasPorPagina);
        var paginacion = document.getElementById('pagination');
        paginacion.innerHTML = '';

        for (var i = 1; i <= totalPaginas; i++) {
            var enlace = document.createElement('a');
            enlace.href = '#';
            enlace.textContent = i;

            if (i === paginaActual) {
                enlace.className = 'active';
            }

            enlace.addEventListener('click', function(e) {
                e.preventDefault();
                paginaActual = parseInt(this.textContent);
                mostrarPagina(paginaActual);
                actualizarPaginacion();
            });

            paginacion.appendChild(enlace);
        }
    }

    mostrarPagina(paginaActual);
    actualizarPaginacion();

    var inputFilasPorPagina = document.getElementById('rowsPerPageInput');

    inputFilasPorPagina.addEventListener('input', function() {
        paginaActual = 1;
        filasPorPagina = parseInt(this.value);

        mostrarPagina(paginaActual);
        actualizarPaginacion();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const menu = document.getElementById('menu');

    menuHamburguesa.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
