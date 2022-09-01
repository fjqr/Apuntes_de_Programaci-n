const http = require("http");

/* LA FUNCIÓN CREATESERVER CREA UN SERVIDOR
  Y RECIBE UNA FUNCIÓN COMO PARÁMETRO.
  AL FINAL, SE DEBE ESPECIFICAR EL PUERTO CON LA FUNCIÓN LISTEN */

http
  .createServer((req, res) => {
    if (req.url === "/about") {
      res.write("Hola, Mundo");
    } else {
      res.write("Hola, Inmundo");
    }
    res.end();
  })
  .listen(3000);
console.log("Servidor escuchando en el puerto 3000");
