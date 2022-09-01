const fs = require("fs");
let prueba = fs.readFileSync("./data/prueba.txt", "utf-8"); //LEE UN ARCHIVO DE TEXTO
console.log(prueba);

let prueba2 = fs.writeFileSync("./data/prueba2.txt", "Otra prueba", {
  flag: "a",
}); // ESTE MÉTODO CREA UN ARCHIVO NUEVO

//SI SE QUIERE AÑADIR TEXTO, SE COLOCA UN OBJETO COMO TERCER PARÁMETRO
// FLAG: A. DE OTRO MODO, LO VA A SOBREESCRIBIR.
