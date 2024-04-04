document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencia al tbody de la tabla donde se mostrarán los médicos
    const medicosTableBody = document.getElementById('medicosBody');
    // Obtener referencia al encabezado "Identificación"
    const idHeader = document.querySelector('.id');
    const nombreHeader = document.querySelector('.nombre');
    const especialidadHeader = document.querySelector('.especialidad');
    const ubicacionHeader = document.querySelector('.ubicacion');

    // Función para mostrar los médicos en la tabla
    function displayMedicos(medicos) {
        // Limpiar el tbody antes de mostrar los médicos para evitar duplicados
        medicosTableBody.innerHTML = '';

        // Iterar sobre la lista de médicos y agregar cada uno a la tabla
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

    // Función para ordenar los médicos por su identificación (id)
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

    // Función para filtrar la tabla según el texto de búsqueda
    function filtrarTabla() {
        const textoBusqueda = searchInput.value.trim().toLowerCase();

        // Filtrar los médicos que coincidan con el texto de búsqueda
        const medicosFiltrados = medicos.filter(medico =>
            medico.id.toLowerCase().includes(textoBusqueda) ||
            medico.nombre.toLowerCase().includes(textoBusqueda) ||
            medico.especialidad.toLowerCase().includes(textoBusqueda) ||
            medico.ubicacion.toLowerCase().includes(textoBusqueda)
        );
        // Mostrar los médicos filtrados en la tabla
        displayMedicos(medicosFiltrados);
    }

    // Función para abrir la página web del médico al hacer clic en una fila de la tabla
    function abrirPaginaWebMedico(idMedico) {
        // Aquí debes definir la lógica para redirigir a la página web del médico con el ID proporcionado
        // Por ejemplo:
        window.location.href = `../html/doctor.html?id=${idMedico}`;

    }

    // Llamar a la función para mostrar los médicos cuando se cargue la página
    displayMedicos(medicos);

    idHeader.addEventListener('click', ordenarPorId);
    nombreHeader.addEventListener('click', ordenarPorNombre);
    especialidadHeader.addEventListener('click', ordenarPorEspecialidad);
    ubicacionHeader.addEventListener('click', ordenarPorUbicacion);
    searchInput.addEventListener('input', filtrarTabla);

    // Agregar un evento de clic a las filas de la tabla para abrir la página web del médico
    medicosTableBody.addEventListener('click', function (event) {
        const fila = event.target.closest('tr');
        if (fila) {
            const idMedico = fila.getAttribute('data-id');
            abrirPaginaWebMedico(idMedico);
        }
    });
});






/*
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al tbody de la tabla donde se mostrarán los médicos
    const medicosTableBody = document.getElementById('medicosBody');

    // Función para mostrar los médicos en la tabla
    function displayMedicos() {
        // Limpiar el tbody antes de mostrar los médicos para evitar duplicados
        medicosTableBody.innerHTML = '';

        // Iterar sobre la lista de médicos y agregar cada uno a la tabla
        for (const medico of medicos) {
            const row = `
                <tr>
                    <td>${medico.nombre}</td>
                    <td>${medico.especialidad}</td>
                    <td>${medico.ubicacion}</td>
                    <td>${medico.horarios}</td>
                    <td>${medico.contacto.telefono}</td>
                    <td>${medico.contacto.email}</td>
                    <td>${formatResenas(medico.resenas)}</td> <!-- Asegúrate de que la función formatResenas esté definida y accesible aquí -->
                    <td>${medico.biografia}</td>
                </tr>`;
            medicosTableBody.innerHTML += row;
        }
    }

    // Llamar a la función para mostrar los médicos cuando se cargue la página
    displayMedicos();
});



*/