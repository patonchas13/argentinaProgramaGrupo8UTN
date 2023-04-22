 // Limpiar el formulario y mostrar mensaje de éxito al enviar el formulario
 document.getElementById("reclamo-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    // Limpiar el formulario
    document.getElementById("reclamo-form").reset();
    // Mostrar el mensaje de éxito
    document.getElementById("mensaje-exito").style.display = "block";
});