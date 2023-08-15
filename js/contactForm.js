document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const statusMessage = document.getElementById("statusMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita la recarga de página por defecto

        // Crea un objeto FormData con los datos del formulario
        const formData = new FormData(form);

        // Envía los datos al servidor usando Fetch API
        fetch("process_form.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            statusMessage.innerHTML = data; // Muestra el mensaje de estado en la página
        })
        .catch(error => {
            statusMessage.innerHTML = "Ocurrió un error inesperado."; // Manejo de errores
        });
    });
});