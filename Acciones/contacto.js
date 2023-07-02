const form = document.querySelector('.formulario-contacto');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.querySelector('#nombre').value;
  const email = document.querySelector('#email').value;
  const telefono = document.querySelector('#telefono').value;
  const mensaje = document.querySelector('#mensaje').value;

  const data = {
    nombre,
    email,
    telefono,
    mensaje
  };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://sheetdb.io/api/v1/coq96mpjn8rak', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));

  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
      // Crear un elemento div para mostrar el mensaje
      var messageDiv = document.createElement("div");
      messageDiv.innerHTML = "¡Gracias por contactarnos!";
      messageDiv.style.position = "fixed";
      messageDiv.style.top = "50%";
      messageDiv.style.left = "50%";
      messageDiv.style.transform = "translate(-50%, -50%)";
      messageDiv.style.padding = "20px";
      messageDiv.style.backgroundColor = "#4CAF50";
      messageDiv.style.color = "white";
      
      // Agregar el elemento div al body
      document.body.appendChild(messageDiv);
      
      // Ocultar el mensaje después de 3 segundos
      setTimeout(function() {
        messageDiv.style.display = "none";
      }, 3000);
      
      document.querySelector('.formulario-contacto').reset();
    } else if (this.readyState === XMLHttpRequest.DONE && this.status !== 201) {
      // Crear un elemento div para mostrar el mensaje
      var messageDiv = document.createElement("div");
      messageDiv.innerHTML = "Error en el envío";
      messageDiv.style.position = "fixed";
      messageDiv.style.top = "50%";
      messageDiv.style.left = "50%";
      messageDiv.style.transform = "translate(-50%, -50%)";
      messageDiv.style.padding = "20px";
      messageDiv.style.backgroundColor = "#f44336";
      messageDiv.style.color = "white";
      
      // Agregar el elemento div al body
      document.body.appendChild(messageDiv);
      
      // Ocultar el mensaje después de 3 segundos
      setTimeout(function() {
        messageDiv.style.display = "none";
      }, 3000);
    }
  };
  
});

/////

