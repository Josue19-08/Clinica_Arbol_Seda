function mostrarRespuesta(elemento) {

    var respuesta = elemento.querySelector('.respuesta');

    if (respuesta.style.display === 'none' || respuesta.style.display === '') {
        respuesta.style.display = 'block';
    } else {
        respuesta.style.display = 'none';
    }
}