document.addEventListener("DOMContentLoaded", function() {
    // Obtener el usuario iniciado del localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioIniciado = usuarios.find(usuario => usuario.inicio === true);

    // Si no hay usuario iniciado, redirigir al inicio de sesión
    if (!usuarioIniciado) {
        window.location.href = 'inicioSesion.html';
        return;
    }

    // Obtener las citas del usuario del localStorage
    const citas = JSON.parse(localStorage.getItem('citas')) || [];
    const citasBody = document.getElementById('citas-body');

    // Limpiar contenido previo de la tabla
    citasBody.innerHTML = '';

    // Iterar sobre las citas del usuario y agregarlas a la tabla
    citas.forEach((cita, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${cita.medico}</td>
            <td>${cita.fecha}</td>
            <td>${cita.hora}</td>
            <td>${cita.estado}</td>
            <td>
                <button class="cancelar-btn" data-index="${index}">Cancelar</button>
                <button class="modificar-btn" data-index="${index}">Modificar</button>
                <button class="confirmar-btn" data-index="${index}">Confirmar</button>
            </td>
        `;
        citasBody.appendChild(fila);
    });

    // Event listener para los botones de cancelar
    document.querySelectorAll('.cancelar-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            cancelarCita(index);
        });
    });

    // Event listener para los botones de modificar
    document.querySelectorAll('.modificar-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            abrirModalModificar(index);
        });
    });

    // Event listener para los botones de confirmar
    document.querySelectorAll('.confirmar-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            abrirModalConfirmar(index);
        });
    });

    // Función para cancelar una cita
    function cancelarCita(index) {
        citas[index].estado = 'Cancelada';
        localStorage.setItem('citas', JSON.stringify(citas));
        cargarCitas();
        alert('Cita cancelada correctamente');
    }

    // Función para abrir el modal de modificar cita
    function abrirModalModificar(index) {
        const modal = document.getElementById('modalModificar');
        const cita = citas[index];

        document.getElementById('modal-medico').value = cita.medico;
        document.getElementById('modal-fecha').value = cita.fecha;
        document.getElementById('modal-hora').value = cita.hora;

        const guardarBtn = document.getElementById('guardarCambios');
        guardarBtn.onclick = function() {
            guardarCambios(index);
        };

        modal.style.display = 'block';
    }

    // Función para abrir el modal de confirmar cita
    function abrirModalConfirmar(index) {
        const modal = document.getElementById('modalConfirmar');
        modal.style.display = 'block';

        const confirmarDoctorBtn = document.getElementById('confirmarDoctor');
        const confirmarPacienteBtn = document.getElementById('confirmarPaciente');

        confirmarDoctorBtn.onclick = function() {
            confirmarCita(index, 'doctor');
        };

        confirmarPacienteBtn.onclick = function() {
            confirmarCita(index, 'paciente');
        };
    }

    // Función para confirmar la cita
    function confirmarCita(index, tipoConfirmacion) {
        if (tipoConfirmacion === 'doctor') {
            citas[index].confirmadoDoctor = true;
        } else if (tipoConfirmacion === 'paciente') {
            citas[index].confirmadoPaciente = true;
        }

        if (citas[index].confirmadoDoctor && citas[index].confirmadoPaciente) {
            citas[index].estado = 'Confirmada';
        } else if (citas[index].confirmadoDoctor) {
            citas[index].estado = 'En espera de confirmación del paciente';
        } else if (citas[index].confirmadoPaciente) {
            citas[index].estado = 'En espera de confirmación del doctor';
        }

        localStorage.setItem('citas', JSON.stringify(citas));
        cargarCitas();
        cerrarModalConfirmar();
        alert('Cita confirmada correctamente');
    }

    // Función para guardar los cambios de la cita
    function guardarCambios(index) {
        const medico = document.getElementById('modal-medico').value;
        const fecha = document.getElementById('modal-fecha').value;
        const hora = document.getElementById('modal-hora').value;

        // Validaciones
        const fechaActual = new Date();
        const fechaSeleccionada = new Date(fecha);
        if (fechaSeleccionada < fechaActual.setHours(0, 0, 0, 0)) {
            alert('No puedes programar una cita en una fecha anterior a la actual.');
            return;
        }

        // Guardar cambios
        citas[index].medico = medico;
        citas[index].fecha = fecha;
        citas[index].hora = hora;
        localStorage.setItem('citas', JSON.stringify(citas));
        cargarCitas();
        cerrarModal();
        alert('Cita modificada correctamente');

        // Enviar correo de modificación de cita
        if (!usuarioIniciado.correo) {
            alert('El usuario no tiene una dirección de correo electrónico registrada.');
            return;
        }

        const correo = {
            to_name: usuarioIniciado.nombre,
            to_email: usuarioIniciado.correo, // Asegúrate de tener el email del paciente en el objeto usuarioIniciado
            medico_nombre: medico,
            fecha: fecha,
            hora: hora
        };
        enviarCorreo(correo, 'modificación');
    }

    // Función para cerrar el modal de modificar cita
    function cerrarModal() {
        const modal = document.getElementById('modalModificar');
        modal.style.display = 'none';
    }

    // Función para cerrar el modal de confirmar cita
    function cerrarModalConfirmar() {
        const modal = document.getElementById('modalConfirmar');
        modal.style.display = 'none';
    }

    // Event listener para cerrar el modal de modificar cita
    document.getElementsByClassName('close')[0].addEventListener('click', cerrarModal);

    // Event listener para cerrar el modal de confirmar cita
    document.getElementsByClassName('close-confirmar')[0].addEventListener('click', cerrarModalConfirmar);

    // Event listener para cerrar los modales cuando se hace clic fuera de ellos
    window.addEventListener('click', function(event) {
        const modalModificar = document.getElementById('modalModificar');
        const modalConfirmar = document.getElementById('modalConfirmar');
        if (event.target === modalModificar) {
            cerrarModal();
        }
        if (event.target === modalConfirmar) {
            cerrarModalConfirmar();
        }
    });

    // Función para recargar la tabla de citas
    function cargarCitas() {
        citasBody.innerHTML = '';
        citas.forEach((cita, index) => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${cita.medico}</td>
                <td>${cita.fecha}</td>
                <td>${cita.hora}</td>
                <td>${cita.estado}</td>
                <td>
                    <button class="cancelar-btn" data-index="${index}" style="font-size: 10px;">Cancelar</button>
                    <button class="modificar-btn" data-index="${index}" style="font-size: 10px;">Modificar</button>
                    <button class="confirmar-btn" data-index="${index}" style="font-size: 10px;">Confirmar</button>
                </td>

            `;
            citasBody.appendChild(fila);
        });

        // Reagregar event listeners para los botones
        document.querySelectorAll('.cancelar-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                cancelarCita(index);
            });
        });

        document.querySelectorAll('.modificar-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                abrirModalModificar(index);
            });
        });

        document.querySelectorAll('.confirmar-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                abrirModalConfirmar(index);
            });
        });
    }

    // Función para enviar correo utilizando EmailJS
    function enviarCorreo(correo, tipo) {
        if (!correo.to_email) {
            console.error('Error: La dirección de correo del destinatario está vacía.');
            alert('Error: La dirección de correo del destinatario está vacía.');
            return;
        }
        
        emailjs.send('service_m7rotwq', 'template_p5anz3g', correo)
            .then(function(response) {
                console.log(`Correo de ${tipo} enviado con éxito!`, response.status, response.text);
                alert(`Correo de ${tipo} enviado con éxito`);
            }, function(error) {
                console.error(`Error al enviar el correo de ${tipo}:`, error);
                alert(`Error al enviar el correo de ${tipo}`);
            });
    }

    // Cargar citas iniciales
    cargarCitas();
});

document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const menu = document.getElementById('menu');

    menuHamburguesa.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
