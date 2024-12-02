document.addEventListener("DOMContentLoaded", function () {
    const table = $('#academicos').DataTable();

    let selectedRowData = null;

    // Manejar la selección de filas
    $('#academicos tbody').on('click', 'tr', function () {
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
            const numeroPersonal = selectedRowData[0]; // Primera columna: Matrícula
            const nombre = selectedRowData[1]; // Segunda columna: Nombre
            const correo = selectedRowData[2]; // Tercera columna: Correo

            // Redirigir a otra ventana con información seleccionada
            window.location.href = `consultar_academico.html?numeroPersonal=${numeroPersonal}&nombre=${encodeURIComponent(nombre)}&correo=${encodeURIComponent(correo)}`;
        } else {
            alert('Por favor, selecciona un estudiante antes de continuar.');
        }
    });
});
