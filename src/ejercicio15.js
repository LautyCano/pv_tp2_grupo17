//15. Escribir una función llamada retornar mes, que reciba un número entero y si
// corresponde a un mes del año devolver el nombre del mes, si no se cumple entonces
// mostrar un mensaje que no es un mes.

let año = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const RetornarMes = () => {
    let meses = document.getElementById("mese").valueAsNumber;

    if (meses <= 12 && meses > 0 )
    {
        let cont = 1;
        for (let i = 0; i < 12; i++)
        {
            if (cont == meses)
            {
                console.log ("El numero " + meses +" Pertenece al mes: " + año[i]);
                break;
            }
            cont++; 
        }
        
    }
    else
    {
        console.log ("El Número " + meses + " No es un mes del Año");
    }
};
document.getElementById("Envia").addEventListener("click", RetornarMes);
