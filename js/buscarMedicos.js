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
                    <td>${medico.id}</td>
                    <td>${medico.nombre}</td>
                    <td>${medico.especialidad}</td>
                    <td>${medico.ubicacion}</td>
                </tr>`;
            medicosTableBody.innerHTML += row;
        }
    }

    // Llamar a la función para mostrar los médicos cuando se cargue la página
    displayMedicos();
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