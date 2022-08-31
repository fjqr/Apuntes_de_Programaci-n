const path = require("path");
let fileRoute = path.join("Programming_notes", "Javascript", "basics.js"); //CONCATENA LOS PARÁMETROS CONVIRTIÉNDOLOS EN UNA RUTA VÁLIDA PARA SO ACTUAL
console.log(fileRoute);
console.log(path.basename(fileRoute)); //DEVUELVE LA BASE DE LA URL
console.log(path.dirname(fileRoute)); //DEVUELVE LA RUTA DEL ARCHIVO SIN EL MISMO
console.log(path.parse(fileRoute)); //DEVULEVE LA URL EN FORMATO DE OBJETO
console.log(path.resolve("Node_Express")); // DEVUELVE TODA LA RUTA DEL ARCHIVO ESPECIFICADO
