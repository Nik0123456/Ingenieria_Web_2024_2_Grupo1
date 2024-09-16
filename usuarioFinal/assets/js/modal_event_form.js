document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos del DOM
    const modal = document.getElementById('myModal');         // El modal
    const closeModal = document.getElementById('closeModal'); // Botón para cerrar el modal (la "X")
    const acceptButton = document.getElementById('acceptButton'); // Botón de "Aceptar"
    const sendButton = document.getElementById('send_button'); // Botón de "Confirmar inscripción"

    // Función para mostrar el modal cuando se presiona el botón "Confirmar inscripción"
    sendButton.addEventListener('click', function(event) {
      event.preventDefault(); // Evita cualquier acción por defecto (como enviar formulario)
      modal.style.display = 'flex'; // Mostrar el modal
    });

    // Función para cerrar el modal cuando se presiona la "X"
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none'; // Ocultar el modal
    });

    // Función para cerrar el modal cuando se presiona el botón "Aceptar"
    acceptButton.addEventListener('click', function(event) {
      event.preventDefault(); // Evitar comportamiento por defecto del botón
      modal.style.display = 'none'; // Ocultar el modal
    });

    // Función para cerrar el modal cuando se hace clic fuera de él
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none'; // Ocultar el modal
      }
    });
  });