document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a los elementos del DOM
    const medicosTableBody = document.getElementById('medicosBody');
    const searchInput = document.getElementById('searchInput');
    const searchCriteria = document.getElementById('searchCriteria');
    const autocompleteList = document.getElementById('autocomplete-container');
    const idHeader = document.querySelector('.id');
    const nombreHeader = document.querySelector('.nombre');
    const especialidadHeader = document.querySelector('.especialidad');
    const ubicacionHeader = document.querySelector('.ubicacion');

    // Función para mostrar los médicos en la tabla
    function displayMedicos(medicos) {
        medicosTableBody.innerHTML = '';
        for (const medico of medicos) {
            const row = `
                <tr data-id="${medico.id}">
                    <td class="id">${medico.id}</td>
                    <td class="nombre">${medico.nombre}</td>
                    <td class="especialidad">${medico.especialidad}</td>
                    <td class="ubicacion">${medico.ubicacion}</td>
                </tr>`;
            medicosTableBody.innerHTML += row;
        }
    }

    // Funciones para ordenar los médicos
    function ordenarPorId() {
        medicos.sort((a, b) => a.id.localeCompare(b.id));
        displayMedicos(medicos);
    }

    function ordenarPorNombre() {
        medicos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        displayMedicos(medicos);
    }

    function ordenarPorEspecialidad() {
        medicos.sort((a, b) => a.especialidad.localeCompare(b.especialidad));
        displayMedicos(medicos);
    }

    function ordenarPorUbicacion() {
        medicos.sort((a, b) => a.ubicacion.localeCompare(b.ubicacion));
        displayMedicos(medicos);
    }

    // Función para filtrar la tabla según el criterio de búsqueda
    function filtrarTabla() {
        const textoBusqueda = searchInput.value.trim().toLowerCase();
        if (!textoBusqueda) {
            autocompleteList.innerHTML = '';
            displayMedicos(medicos);
            return;
        }

        const criterio = searchCriteria.value;

        let medicosFiltrados;

        if (criterio === 'ninguno') {
            medicosFiltrados = medicos.filter(medico =>
                medico.id.toLowerCase().includes(textoBusqueda) ||
                medico.nombre.toLowerCase().includes(textoBusqueda) ||
                medico.especialidad.toLowerCase().includes(textoBusqueda) ||
                medico.ubicacion.toLowerCase().includes(textoBusqueda)
            );
        } else {
            medicosFiltrados = medicos.filter(medico =>
                medico[criterio].toLowerCase().includes(textoBusqueda)
            );
        }

        displayMedicos(medicosFiltrados);
        showAutocomplete(medicosFiltrados);
    }

    // Función para mostrar sugerencias de autocompletado
    function showAutocomplete(medicosFiltrados) {
        autocompleteList.innerHTML = '';
        if (!searchInput.value.trim()) {
            return;
        }
        for (const medico of medicosFiltrados) {
            const item = document.createElement('div');
            item.classList.add('autocomplete-item');
            item.textContent = `${medico.nombre} (${medico.especialidad}) - ${medico.ubicacion}`;
            item.addEventListener('click', () => {
                searchInput.value = medico.nombre;
                filtrarTabla();
            });
            autocompleteList.appendChild(item);
        }
    }

    // Función para abrir la página web del médico al hacer clic en una fila de la tabla
    function abrirPaginaWebMedico(idMedico) {
        window.location.href = `../html/doctor.html?id=${idMedico}`;
    }

    // Mostrar los médicos al cargar la página
    displayMedicos(medicos);

    // Asignar eventos de clic a los encabezados para ordenar
    idHeader.addEventListener('click', ordenarPorId);
    nombreHeader.addEventListener('click', ordenarPorNombre);
    especialidadHeader.addEventListener('click', ordenarPorEspecialidad);
    ubicacionHeader.addEventListener('click', ordenarPorUbicacion);

    // Asignar evento de input al campo de búsqueda para filtrar y autocompletar
    searchInput.addEventListener('input', filtrarTabla);

    // Asignar evento de clic a las filas de la tabla para abrir la página del médico
    medicosTableBody.addEventListener('click', function (event) {
        const fila = event.target.closest('tr');
        if (fila) {
            const idMedico = fila.getAttribute('data-id');
            abrirPaginaWebMedico(idMedico);
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
