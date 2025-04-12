// Ejercicio 6 - Calcular promedio de edades

const edades = [18, 22, 30, 25, 27, 29, 35, 40];
const suma = edades.reduce((acc, val) => acc + val, 0);
const promedio = suma / edades.length;

console.log("Edades:", edades);
console.log("Promedio de edades:", promedio);
