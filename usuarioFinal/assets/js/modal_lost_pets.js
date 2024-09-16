// Obtener elementos
const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("publicacion_mascota_perdida");
const closeModalButton = document.getElementById("closeModal");

// Abrir el modal al hacer clic en "Publicar mascota perdida"
openModalButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    modal.style.display = "flex"; // Mostrar el modal
});

// Cerrar el modal al hacer clic en la 'X'
closeModalButton.addEventListener("click", function() {
    modal.style.display = "none"; // Ocultar el modal
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Eventos para los botones "Sí" y "No"
document.getElementById("siButton").addEventListener("click", function() {
    // Redirigir al HTML correspondiente cuando se presiona "Sí"
    window.location.href = "user_lost_owner_form.html"; // Reemplaza con el nombre de tu archivo HTML
});

document.getElementById("noButton").addEventListener("click", function() {
    // Redirigir al HTML correspondiente cuando se presiona "No"
    window.location.href = "user_lost_third_form.html"; // Reemplaza con el nombre de tu archivo HTML
});