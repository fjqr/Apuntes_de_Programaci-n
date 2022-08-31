// MÓDULO OS
const os = require("os");
console.log(os.userInfo()); // DEVUELVE LA INFORMACIÓN DEL USUARIO
console.log(os.uptime()); // DEVUELVE EL TIEMPO EN EL QUE SE HA ESTADO USANDO LA PC
console.log(os.platform()); //NOMBRE DEL SISTEMA OPERATIVO QUE SE ESTÁ UTILIZANDO
console.log(os.totalmem()); //NÚMERO TOTAL DE MEMORIA EN EL SISTEMA
console.log(os.freemem()); // NÚMERO DE MEMORIA LIBRE EN BYTES
