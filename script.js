// Archivo: script.js

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert(`Gracias, ${name}. Tu mensaje ha sido enviado.`);
      // Aquí puedes agregar lógica para enviar los datos a un servidor o correo electrónico.
      event.target.reset();
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
  
// Seleccionar el botón de apertura, el botón de cierre y el menú
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const navbar = document.querySelector('.navbar');

// Agregar un evento al botón para abrir/cerrar el menú
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active'); // Alternar la clase "active" para mostrar/ocultar el menú
});

// Función para mostrar el menú
/*menuToggle.addEventListener('click', () => {
  navbar.classList.add('active');
});*/

// Función para cerrar el menú
menuClose.addEventListener('click', () => {
  navbar.classList.remove('active');
});

// Opcional: Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});