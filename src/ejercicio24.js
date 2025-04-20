//Construir una página web utilizando Html, Css y JavaScript que incluya un botón. Al
// hacer clic en ese botón, el color de fondo de toda la página debe cambiar.
// Usar un elemento <button> para permitir la interacción del usuario.
// Cambiar el color de fondo del body al hacer clic.
// Utilizar JavaScript para capturar el evento click.
// Aplicar estilos básicos con CSS para mejorar la presentación.
// Mostrar un mensaje en la consola cada vez que el color cambia.
// Opcional: Cambiar el color de fondo aleatoriamente entre varios colores cada vez que se haga clic.

const colores = ["red", "blue", "yellow", "brown", "cyan", "pink", "green", "lime"];
const boton = document.getElementById("cambio");
let i = 0;

boton.addEventListener( "click", () => {
    document.body.style.backgroundColor = colores[i];
    console.log('Color de fondo cambiado a: ' + colores[i]);
    i = i+1;
    if ( i === colores.length )
    {
        i=0;
    }
});