document.addEventListener("DOMContentLoaded", () => {
    const opciones = document.querySelectorAll('input[name="lenguaje"]');
    const resultado = document.getElementById("resultado");

    opciones.forEach(opcion => {
        opcion.addEventListener("change", () => {
            resultado.textContent = `Has seleccionado: ${opcion.value}`;
            console.log(`Opción seleccionada: ${opcion.value}`);
        });
    });
});
