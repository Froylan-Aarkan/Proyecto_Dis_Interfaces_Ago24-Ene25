document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("problemas-academicos");
    const agregarProblemaBtn = document.getElementById("agregar-problema");
    const quitarProblemaBtn = document.getElementById("quitar-problema");
    const registrarBtn = document.getElementById("registrar");
    const problemasContainer = document.querySelector("main");

    // Habilitar/deshabilitar sección de problemáticas
    checkbox.addEventListener("change", () => {
        const inputs = document.querySelectorAll(
            "#experiencia-educativa, #academico, #numero-alumnos, #problema, #agregar-problema, #quitar-problema"
        );

        if (checkbox.checked) {
            inputs.forEach(input => input.disabled = false);
        } else {
            inputs.forEach(input => input.disabled = true);
        }
    });

    // Función para agregar una nueva problemática
    agregarProblemaBtn.addEventListener("click", () => {
        const problemSection = document.createElement("div");
        problemSection.className = "row mb-4 problem-section";

        problemSection.innerHTML = `
            <div class="col-md-4">
                <label class="form-label text-start d-block">Experiencia Educativa</label>
                <input type="text" class="form-control mb-3 problema-experiencia">
            </div>
            <div class="col-md-4">
                <label class="form-label text-start d-block">Profesor</label>
                <input type="text" class="form-control mb-3 problema-academico">
            </div>
            <div class="col-md-4">
                <label class="form-label text-start d-block">No. de alumnos</label>
                <input type="text" class="form-control mb-3 problema-alumnos">
            </div>
            <div class="col-md-12">
                <label class="form-label text-start d-block">Problema</label>
                <textarea class="form-control mb-3 problema" rows="5" placeholder="Escribe la problemática aquí..."></textarea>
            </div>
        `;

        // Insertar antes del contenedor de los botones
        problemasContainer.insertBefore(
            problemSection,
            agregarProblemaBtn.closest(".row")
        );
    });

    // Función para eliminar la última problemática
    quitarProblemaBtn.addEventListener("click", () => {
        const problemSections = document.querySelectorAll(".problem-section");
        if (problemSections.length > 0) {
            const lastProblem = problemSections[problemSections.length - 1];
            lastProblem.remove();
        } else {
            alert("No hay más problemáticas que eliminar.");
        }
    });

    // Validación al registrar
    registrarBtn.addEventListener("click", (event) => {
        if (checkbox.checked) {
            const experienciaInputs = document.querySelectorAll(".problema-experiencia");
            const profesorInputs = document.querySelectorAll(".problema-academico");
            const alumnosInputs = document.querySelectorAll(".problema-alumnos");
            const problemasTextareas = document.querySelectorAll(".problema");

            let isValid = true;

            // Validar cada problemática (aunque solo haya una)
            experienciaInputs.forEach(input => {
                if (input.value.trim() === "") {
                    isValid = false;
                }
            });

            profesorInputs.forEach(input => {
                if (input.value.trim() === "") {
                    isValid = false;
                }
            });

            alumnosInputs.forEach(input => {
                if (input.value.trim() === "") {
                    isValid = false;
                }
            });

            problemasTextareas.forEach(textarea => {
                if (textarea.value.trim() === "") {
                    isValid = false;
                }
            });

            // Mostrar error si hay campos vacíos
            if (!isValid) {
                event.preventDefault();
                alert("Por favor, completa todos los campos de las problemáticas antes de registrar.");
                return;
            }
        }

        // Si no hay errores, continuar con el registro
        alert("Registro exitoso.");
    });
});
