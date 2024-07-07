document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('botonDescargar').addEventListener('click', function () {
        // Crear un enlace temporal
        var enlace = document.createElement('a');
        enlace.href = '../pdf/PoliticasPrivacidad.pdf';
        // Especificar que el enlace sea descargado al hacer clic
        enlace.setAttribute('download', '../pdf/PoliticasPrivacidad.pdf');
        // Hacer clic en el enlace temporal
        enlace.click();
    });
});


