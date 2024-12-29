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
  