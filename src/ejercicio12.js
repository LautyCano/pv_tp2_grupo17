let kilometros = 0, combustible = 0;

do {
    kilometros = prompt("Ingrese los kilómetros recorridos:");
} while (kilometros <= 0 || isNaN(kilometros));

do {
    combustible = prompt("Ingrese los litros de combustible consumidos:");
} while (combustible <= 0 || isNaN(combustible));

let consumo = combustible / kilometros;

alert("El consumo de combustible por kilómetro es: " + consumo);