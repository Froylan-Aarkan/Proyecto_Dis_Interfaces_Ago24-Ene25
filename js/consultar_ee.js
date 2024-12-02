// Función para obtener los parámetros de la URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        nrc: params.get('nrc'),
        nombre: params.get('nombre'),
        seccion: params.get('seccion')
    };
}

// Llenar los inputs con los datos del estudiante
document.addEventListener('DOMContentLoaded', () => {
    const params = getQueryParams();

    // Asignar los valores de los parámetros a los inputs
    if (params.nrc) {
        document.getElementById('nrc').value = params.nrc;
    }
    if (params.nombre) {
        document.getElementById('nombre').value = decodeURIComponent(params.nombre);
    }
    if (params.seccion) {
        document.getElementById('seccion').value = decodeURIComponent(params.seccion);
    }
});
