//Escribir una función llamada sumarRango que reciba dos argumentos numéricos
// enteros: número inicial y número final. La función debe retornar la suma de los números
// en ese rango (incluyéndolos).
// El número inicial debe ser menor o igual que el número final

const boton = document.getElementById("Envia");

boton.addEventListener("click", () => {
    let min = document.getElementById("minimo").valueAsNumber;
    let max = document.getElementById("maximo").valueAsNumber;

    if (min <= max)
    {
        let cont = min;
        let mini = min +1;
        for (let i = mini; i <= max; i++)
        {
            cont = cont + i;
        }
        console.log ("La suma del rango de los numeros es: " + cont );
        
    }
    else
    {
        console.log ("El Número " + min + " Es mayor a " + max );
    }
});