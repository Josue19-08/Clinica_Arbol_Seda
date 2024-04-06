document.addEventListener("DOMContentLoaded", function() {
    // Obtener las citas del usuario del localStorage
    const citas = JSON.parse(localStorage.getItem('citas')) || [];

    const citasBody = document.getElementById('citas-body');

    // Limpiar contenido previo de la tabla
    citasBody.innerHTML = '';

    // Iterar sobre las citas del usuario y agregarlas a la tabla
    citas.forEach(cita => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${cita.medico}</td>
            <td>${cita.cedulaPaciente}</td>
            <td>${cita.paciente}</td>
            <td>${cita.fecha}</td>
            <td>${cita.hora}</td>
        `;
        citasBody.appendChild(fila);
    });
});
