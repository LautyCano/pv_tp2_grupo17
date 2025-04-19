//15. Escribir una función llamada retornar mes, que reciba un número entero y si
// corresponde a un mes del año devolver el nombre del mes, si no se cumple entonces
// mostrar un mensaje que no es un mes.

let año = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const boton = document.getElementById("Envia");

boton.addEventListener("click",  () => {
    let meses = document.getElementById("mese").valueAsNumber;

    if (meses >= 1 && meses <= 12) 
    {
        console.log("El número " + meses + " pertenece al mes: " + año[meses - 1]);
    }
    else
    {
        console.log ("El Número " + meses + " No es un mes del Año");
    }
});