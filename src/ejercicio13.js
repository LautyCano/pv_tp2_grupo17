let mostrarArreglo = (arreglo) => {
    let resultado = arreglo.join('\n');
    console.log(resultado);
    window.alert(resultado);
}

//El usuario ingresa los valores
/*let arreglo = [];
for (let i=0; i < 5; i++){
    let a = prompt("Por favor, ingrese un número:");
    arreglo.push(a);
    console.log("Numero ingresado: " + a);
}*/

let arreglo = [5, 7, 1, 0, 3];
mostrarArreglo(arreglo);