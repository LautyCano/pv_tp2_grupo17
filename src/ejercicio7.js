// Ejercicio 7 - Buscar el nombre más largo

const nombres = ["Lautaro", "Camila", "Maximiliano", "Lucía", "Julián", "Agustina"];

let nombreMasLargo = nombres.reduce((masLargo, actual) =>
  actual.length > masLargo.length ? actual : masLargo
);

console.log("Nombres:", nombres);
console.log("Nombre más largo:", nombreMasLargo);