const inputTexto = document.getElementById('inputTexto');
const mostrarTexto = document.getElementById('mostrarTexto');

inputTexto.addEventListener('input', () => {
  mostrarTexto.textContent = inputTexto.value;
});