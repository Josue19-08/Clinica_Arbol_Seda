document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const idMedico = params.get('id');

    mostrarInfoMedico(idMedico);
});

function mostrarInfoMedico(idMedico) {
    const medico = medicos.find(medico => medico.id === idMedico);

    if (medico) {
        const infoMedicoHTML = `
            <div class="doctor">

            <div class="top">
                    <div class="foto">
                    <img src="../img/${medico.id}.png" alt="Imagen Inicial">
                    </div>

                    <div class="datos">
                        <h1>${medico.nombre}</h1>
                        <p>Identificación: ${medico.id}</p> <br>
                        <p>Especialidad: ${medico.especialidad}</p><br>
                        <p>Ubicación: ${medico.ubicacion}</p>
                    </div>

                    <div class="horario">
                        <h2>Horarios:</h2> <p><br> ${medico.horarios}</p>
                    </div>
            </div>

            <div class="mid">
                    <div class="contacto">
                    <h2>Contacto:</h2>
                        <p>
                            <ul>
                                <li>Teléfono: ${medico.contacto.telefono}</li>
                                <li>Email: ${medico.contacto.email}</li>
                            </ul>
                        </p>
                    </div>

                    <div class="resenna">
                        <h2>Reseñas:</h2>
                        <ul>
                            ${medico.resenas.map(resena => `
                                <li> <br>
                                    <p>Usuario: ${resena.usuario}</p>
                                    <p>Calificación: ${resena.calificacion}</p>
                                    <p>Comentario: ${resena.comentario}</p>
                                </li>
                            `).join('')}
                        </ul>
                    </div> 
            </div>

            <div class="bottom">
                <div class="biografia">
                    <h2>Biografía</h2>
                    <p>${medico.biografia}</p>
                </div>
            </div>    

            </div>
        `;

        // Mostrar la información del médico en la página
        document.getElementById('doctorContainer').innerHTML = infoMedicoHTML;
    } else {
        // Mostrar un mensaje de error si el médico no se encuentra
        document.getElementById('doctorContainer').innerHTML = '<p>El médico no se encontró.</p>';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const idMedico = params.get('id');

    mostrarInfoMedico(idMedico);
});

