// TIPOS DE DATOS

// NUMBER
let num = 1589633;

//STRING
let str = "Cadena de texto";

//BOOLEAN
let bool = true;

//UNDEFINED
let und; //no definido

// NULL
let nu = null; // definido,vacío

//SYMBOL
let symb = Symbol("id"); //crea un valor único, que no es duplicable. Se puede usar en objetos

// VARIABLES

var first = "first";
let second = "second";
const third = "third";

/*Var tiene scope global, 
Let tiene scope local, al igual que const.
Los valores de las variables declaradas con const no pueden cambiarse */

// FUNCIONES

// Convencional
function sum(a, b) {
  return a + b;
}

/* Arrow 
(Lleva return implícito y cuando recibe un solo paránetro,
     se pueden omitir los paréntesis) */
let sum = (a, b) => a + b;

// Anónima
let sum = function (a, b) {
  return a + b;
};
