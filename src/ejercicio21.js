// Capturamos el input y el párrafo
const inputTexto = document.getElementById('inputTexto');
const mostrarTexto = document.getElementById('mostrarTexto');

// Escuchamos el evento "input"
inputTexto.addEventListener('input', () => {
  mostrarTexto.textContent = inputTexto.value;
});