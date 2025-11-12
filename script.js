// Espera a que todo el contenido de la página esté cargado
document.addEventListener("DOMContentLoaded", function() {

    // Selecciona el botón y el texto oculto
    const boton = document.getElementById("info-btn");
    const texto = document.getElementById("info-text");

    // Cuando el usuario hace clic en el botón...
    boton.addEventListener("click", function() {
        // Alterna la clase "oculto" para mostrar u ocultar el texto
        texto.classList.toggle("oculto");

        // Cambia el texto del botón para hacerlo más interactivo
        if (texto.classList.contains("oculto")) {
            boton.textContent = "Haz clic para saber cómo";
        } else {
            boton.textContent = "Ocultar información";
        }
    });
});
