// Función para obtener los parámetros de la URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        matricula: params.get('matricula'),
        nombre: params.get('nombre'),
        correo: params.get('correo')
    };
}

// Llenar los inputs con los datos del estudiante
document.addEventListener('DOMContentLoaded', () => {
    const params = getQueryParams();

    // Asignar los valores de los parámetros a los inputs
    if (params.matricula) {
        document.getElementById('matricula').value = params.matricula;
    }
    if (params.nombre) {
        document.getElementById('nombre').value = decodeURIComponent(params.nombre);
    }
    if (params.correo) {
        document.getElementById('email').value = decodeURIComponent(params.correo);
    }
});
