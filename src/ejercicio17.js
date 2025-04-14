//Escribir una función llamada contarLetraA que reciba un string y retorne el número de
// veces que aparece la letra "a".

const ContarLetraA = () => 
    {
        let pala = document.getElementById("palabra").value;
        let letra = pala.split(''); // split divide un string en partes y si le pasas '' lo parte en caracteres individuales
        let max = letra.length;
        let cont = 0;
        for (let i = 0; i < max; i++)
        {
            if ( letra[i] == "a" )
            {
                cont++;
            }
        }
        console.log( "La cantidad de A que hay en la palabra " + pala + " es de " + cont);
    };
    document.getElementById("Envia").addEventListener("click", ContarLetraA);