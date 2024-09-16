// Obtener referencias a los elementos
const solicitarBtn = document.getElementById('solicitar-btn');
const modal = document.getElementById('modal');
const aceptarBtn = document.getElementById('aceptar-btn');

// Mostrar el modal al presionar el botón "Solicitar publicación"
solicitarBtn.addEventListener('click', () => {
    modal.classList.add('show');
});

// Cerrar el modal al presionar el botón "Aceptar"
aceptarBtn.addEventListener("click", function(){
    window.location.href = "user_events.html"; 
    modal.classList.remove("show");
});
