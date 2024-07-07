document.addEventListener("DOMContentLoaded", function() {
    var formularioRecuperacion = document.getElementById('formulario-recuperacion');
    var botonEnviar = document.getElementById('button');

    formularioRecuperacion.addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;

        // Validar formato de correo electrónico
        if (!validarEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Enviar correo de recuperación
        const emailParams = {
            to_email: email,
            to_name: 'Usuario', // Puedes personalizar esto según tus necesidades
            reply_to: 'no-reply@clinicaseda.com'
        };

        emailjs.send('default_service', 'template_ev380ab', emailParams)
            .then(function(response) {
                console.log('Correo enviado con éxito!', response.status, response.text);
                alert('Se ha enviado un correo para restablecer la contraseña.');
            }, function(error) {
                console.error('Error al enviar el correo:', error);
                alert('Error al enviar el correo de recuperación de contraseña.');
            });
    });

    function validarEmail(email) {
        var emailExpReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailExpReg.test(email);
    }
});
