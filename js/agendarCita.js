document.addEventListener("DOMContentLoaded", function() {
    // Variable para almacenar la celda seleccionada previamente
    var celdaSeleccionadaPrev = null;

    // Función para verificar si hay una sesión iniciada
    function verificarSesionIniciada() {
        var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        return usuarios.some(function(usuario) {
            return usuario.inicio === true;
        });
    }

    // Verificar si hay una sesión iniciada
    if (!verificarSesionIniciada()) {
        // Si no hay una sesión iniciada, redirigir a la página de inicio de sesión
        window.location.href = 'inicioSesion.html';
    } else {
        // Si hay una sesión iniciada, continuar cargando la página normalmente

        // Función para generar el calendario del mes y año especificados
        function generarCalendario(mes, año) {
            var fecha = new Date(año, mes - 1, 1);
            var primerDiaSemana = fecha.getDay();
            var ultimoDiaMes = new Date(año, mes, 0).getDate();
            var cuerpoCalendario = document.getElementById('cuerpo-calendario');
            var tituloMes = document.getElementById('titulo-mes');
            var dia = 1;

            cuerpoCalendario.innerHTML = '';
            tituloMes.textContent = obtenerNombreMes(mes) + ' ' + año;

            // Obtener citas almacenadas en localStorage
            var citas = JSON.parse(localStorage.getItem('citas')) || [];

            for (var i = 0; i < 6; i++) {
                var fila = document.createElement('tr');

                for (var j = 0; j < 7; j++) {
                    if (i === 0 && j < primerDiaSemana) {
                        var celdaVacia = document.createElement('td');
                        fila.appendChild(celdaVacia);
                    } else if (dia > ultimoDiaMes) {
                        break;
                    } else {
                        var celda = document.createElement('td');
                        celda.textContent = dia;

                        // Verificar si hay una cita para esta fecha y cambiar el color de fondo si es necesario
                        var fechaCita = dia + ' ' + obtenerNombreMes(mes) + ' ' + año;
                        var cita = obtenerCitaPorFecha(fechaCita, citas);
                        if (cita && cita.estado === 'Programada') {
                            celda.style.backgroundColor = 'darkolivegreen'; // Color de fondo para las fechas con citas programadas
                        }

                        // Agregar evento de click a cada celda del calendario
                        celda.addEventListener('click', function() {
                            if (celdaSeleccionadaPrev !== null) {
                                // Restaurar color de la celda seleccionada previamente
                                celdaSeleccionadaPrev.style.backgroundColor = '';
                                if (cita && cita.estado === 'Programada') {
                                    celdaSeleccionadaPrev.style.backgroundColor = 'darkolivegreen';
                                }
                            }
                            // Cambiar color de la celda seleccionada
                            this.style.backgroundColor = 'lightblue';
                            // Guardar referencia a la celda seleccionada
                            celdaSeleccionadaPrev = this;
                        });

                        fila.appendChild(celda);
                        dia++;
                    }
                }

                cuerpoCalendario.appendChild(fila);
            }
        }

        // Función para verificar si hay una cita registrada para la fecha dada y devolver la cita
        function obtenerCitaPorFecha(fecha, citas) {
            return citas.find(function(cita) {
                return cita.fecha === fecha;
            });
        }

        // Función para obtener el nombre del mes según su número (1 - 12)
        function obtenerNombreMes(mes) {
            var nombresMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            return nombresMeses[mes - 1];
        }

        // Función para mostrar el mes anterior
        function mesAnterior() {
            mesActual--;
            if (mesActual === 0) {
                mesActual = 12;
                añoActual--;
            }
            generarCalendario(mesActual, añoActual);
        }

        // Función para mostrar el siguiente mes
        function mesSiguiente() {
            mesActual++;
            if (mesActual === 13) {
                mesActual = 1;
                añoActual++;
            }
            generarCalendario(mesActual, añoActual);
        }

        // Función para programar la cita
        function programarCita() {
            // Verificar si hay un usuario iniciado
            var usuarioIniciado = JSON.parse(localStorage.getItem('usuarios')).find(function(usuario) {
                return usuario.inicio === true;
            });

            if (!usuarioIniciado) {
                // Mostrar un mensaje de error si no hay usuario iniciado
                alert('Debes iniciar sesión para programar una cita.');
                return;
            }

            // Obtener datos del paciente
            var paciente = usuarioIniciado;

            // Obtener nombre y correo del médico seleccionado
            var medicoSelect = document.getElementById('medico');
            var medicoNombre = medicoSelect.options[medicoSelect.selectedIndex].text;
            var correoMedico = medicoSelect.options[medicoSelect.selectedIndex].getAttribute('data-correo');

            // Obtener fecha seleccionada en el calendario
            var fecha = obtenerFechaSeleccionada();

            // Obtener hora seleccionada
            var hora = document.getElementById('time').value;

            // Verificar si la fecha seleccionada es anterior a la fecha actual
            var fechaActual = new Date();
            var fechaSeleccionada = new Date(`${fecha.split(' ')[2]}-${obtenerNumeroMes(fecha.split(' ')[1])}-${fecha.split(' ')[0]}`);
            if (fechaSeleccionada < fechaActual.setHours(0, 0, 0, 0)) {
                alert('No puedes programar una cita en una fecha anterior a la actual.');
                return;
            }

            // Verificar si ya hay una cita programada con el mismo médico, fecha y hora que no esté cancelada
            var citas = JSON.parse(localStorage.getItem('citas')) || [];
            var conflicto = citas.some(function(cita) {
                return cita.cedulaMedico === obtenerCedulaMedico(medicoNombre) && cita.fecha === fecha && cita.hora === hora && cita.estado === 'Programada';
            });

            if (conflicto) {
                alert('Ya hay una cita programada con este médico a la misma hora.');
                return;
            }

            // Crear objeto de cita
            var cita = {
                paciente: paciente.nombre,
                cedulaPaciente: paciente.cedula,
                medico: medicoNombre,
                cedulaMedico: obtenerCedulaMedico(medicoNombre),
                fecha: fecha,
                hora: hora,
                estado: 'Programada'
            };

            // Guardar cita en localStorage
            citas.push(cita);
            localStorage.setItem('citas', JSON.stringify(citas));

            // Alerta de cita programada
            alert('Cita programada correctamente');

            // Recargar el calendario para reflejar los cambios
            generarCalendario(mesActual, añoActual);

            // Enviar correo de confirmación al paciente
            const correoPaciente = {
                to_name: paciente.nombre,
                to_email: paciente.correo,
                medico_nombre: medicoNombre,
                fecha: fecha,
                hora: hora
            };
            enviarCorreo(correoPaciente, 'confirmación');

            // Enviar correo de confirmación al doctor
            const correoDoctor = {
                to_nameDoctor: medicoNombre.split(' (')[0],
                to_paciente: paciente.nombre,
                fecha: fecha,
                hora: hora,
                to_email_doctor: correoMedico
            };
            enviarCorreoDoctor(correoDoctor, 'confirmación');
        }

        // Función para obtener la fecha seleccionada en el calendario
        function obtenerFechaSeleccionada() {
            var tituloMes = document.getElementById('titulo-mes');
            var fechaSeleccionada = tituloMes.textContent.split(' ');
            var mes = fechaSeleccionada[0];
            var año = fechaSeleccionada[1];
            var dia = celdaSeleccionadaPrev.textContent;
            return dia + ' ' + mes + ' ' + año;
        }

        // Función para obtener la cédula del médico a partir de su nombre
        function obtenerCedulaMedico(nombreMedico) {
            var medicoSelect = document.getElementById('medico');
            var opciones = medicoSelect.options;
            for (var i = 0; i < opciones.length; i++) {
                if (opciones[i].text === nombreMedico) {
                    return opciones[i].value; // Retorna la cédula completa sin cortarla
                }
            }
            return ''; // Retorna una cadena vacía si no se encuentra el médico
        }

        // Función para obtener el número del mes según su nombre
        function obtenerNumeroMes(nombreMes) {
            var nombresMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            return nombresMeses.indexOf(nombreMes) + 1;
        }
        
        // Función para redirigir a la página de administrar citas
        function administrarCita() {
            window.location.href = '../html/administrarCitas.html';
        }

        // Event listeners para los botones de navegación
        document.getElementById('mes-anterior').addEventListener('click', mesAnterior);
        document.getElementById('mes-siguiente').addEventListener('click', mesSiguiente);

        // Event listener para el botón de programar cita
        document.getElementById('btn-programar-cita').addEventListener('click', programarCita);

        // Event listener para el botón de administrar cita
        document.getElementById('btn-administrar-cita').addEventListener('click', administrarCita);

        // Generar calendario inicial
        var mesActual = new Date().getMonth() + 1;
        var añoActual = new Date().getFullYear();
        generarCalendario(mesActual, añoActual);
    }

    // Función para enviar correo utilizando EmailJS
    function enviarCorreo(correo, tipo) {
        emailjs.send('service_3r9jxxp', 'template_vukasf1', correo)
            .then(function(response) {
                console.log(`Correo de ${tipo} enviado con éxito!`, response.status, response.text);
                alert(`Correo de ${tipo} enviado con éxito`);
            }, function(error) {
                console.error(`Error al enviar el correo de ${tipo}:`, error);
                alert(`Error al enviar el correo de ${tipo}`);
            });
    }

    // Función para enviar correo de confirmación al doctor utilizando EmailJS
    function enviarCorreoDoctor(correo, tipo) {
        emailjs.send('service_3r9jxxp', 'template_53vr2kr', correo)
            .then(function(response) {
                console.log(`Correo de ${tipo} enviado con éxito al doctor!`, response.status, response.text);
                alert(`Correo de ${tipo} enviado con éxito al doctor`);
            }, function(error) {
                console.error(`Error al enviar el correo de ${tipo} al doctor:`, error);
                alert(`Error al enviar el correo de ${tipo} al doctor`);
            });
    }
});

