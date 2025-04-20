const parrafo = document.getElementById('miParrafo');
const boton = document.getElementById('btnCambiar');

boton.addEventListener('click', () => {
  parrafo.textContent = "¡El texto del párrafo ha cambiado!";
});