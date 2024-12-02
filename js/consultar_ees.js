document.addEventListener("DOMContentLoaded", function () {
    const table = $('#experiencias-educativas').DataTable();

    let selectedRowData = null;

    // Manejar la selección de filas
    $('#experiencias-educativas tbody').on('click', 'tr', function () {
        // Alternar selección
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            selectedRowData = null;
        } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            selectedRowData = table.row(this).data();
        }
    });

    // Redirigir al hacer clic en Consultar
    document.getElementById('consultar').addEventListener('click', function () {
        if (selectedRowData) {
            const nrc = selectedRowData[0]; // Primera columna: Matrícula
            const nombre = selectedRowData[1]; // Segunda columna: Nombre
            const seccion = selectedRowData[2]; // Tercera columna: Correo

            // Redirigir a otra ventana con información seleccionada
            window.location.href = `consultar_ee.html?nrc=${nrc}&nombre=${encodeURIComponent(nombre)}&seccion=${encodeURIComponent(seccion)}`;
        } else {
            alert('Por favor, selecciona un estudiante antes de continuar.');
        }
    });
});
