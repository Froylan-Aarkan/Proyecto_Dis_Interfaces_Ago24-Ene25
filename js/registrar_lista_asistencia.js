document.addEventListener("DOMContentLoaded", () => {
    const cargarButton = document.querySelector("#cargar");
    const registrarButton = document.querySelector("#registrar");
    const fileInput = document.createElement("input");
    let isFileUploaded = false; // Variable para rastrear si se cargó un archivo

    // Crear input file oculto para subir PDFs
    fileInput.type = "file";
    fileInput.accept = "application/pdf";
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);

    // Manejar clic en el botón de cargar lista
    cargarButton.addEventListener("click", () => {
        fileInput.click();
    });

    // Manejar selección de archivo
    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            const fileURL = URL.createObjectURL(file);
            showPDFPreview(fileURL);
            isFileUploaded = true; // Marcar como cargado
        } else {
            alert("Por favor, selecciona un archivo PDF válido.");
            isFileUploaded = false; // Marcar como no cargado
        }
    });

    // Validar al hacer clic en "Registrar"
    registrarButton.addEventListener("click", (event) => {
        if (!isFileUploaded) {
            event.preventDefault(); // Prevenir acción predeterminada si no se cargó un archivo
            alert("Debes cargar un archivo PDF antes de registrar.");
        } else {
            alert("Registro exitoso.");
            // Aquí puedes agregar la lógica para enviar los datos o redirigir
        }
    });

    // Función para mostrar vista previa del PDF
    function showPDFPreview(pdfURL) {
        const previewContainer = document.querySelector(".text-center.my-4");
        previewContainer.innerHTML = `
            <iframe src="${pdfURL}" style="width: 100%; height: 800px; border: 1px solid #ccc;" frameborder="0"></iframe>
        `;
    }
});
