let calcularMayor = (numero1, numero2) => {
    if (numero1 > numero2) {
        window.alert("Numeros: " + numero1 + " y " + numero2 + "\nEl número mayor es: " + numero1);
    }
    else if (numero1 < numero2) {
        window.alert("Numeros: " + numero1 + " y " + numero2 + "\nEl número mayor es: " + numero2);
    }
    else {
        window.alert("Numeros: " + numero1 + " y " + numero2 + "\nLos números son iguales");
    }
}

calcularMayor(5, 9);
calcularMayor(50, 9);
calcularMayor(12, 12);
