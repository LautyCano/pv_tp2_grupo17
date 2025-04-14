let duplicar = (arreglo) => {
    let resultado = 0;
    for (let i = 0; i < arreglo.length; i++) {
        resultado = (arreglo[i] * 2);
        arreglo[i] = resultado;
    }
    let resultadofinal = arreglo.join('\n');
    console.log(resultadofinal);
    window.alert(resultadofinal);
}

//El usuario ingresa los valores
/*
let arreglo = [];
for (let i=0; i < 5; i++){
    let a = prompt("Por favor, ingrese un número:");
    arreglo.push(a);
    console.log("Numero ingresado: " + a);
}
*/
let arreglo = [5, 1, 6, 4, 0];
duplicar(arreglo);