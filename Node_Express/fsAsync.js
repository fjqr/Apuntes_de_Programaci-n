const fs = require("fs");

// CÓDIGO ASÍNCRONO

fs.readFile("./data/prueba2.txt", (err, data) => {
  if (!err) {
    console.log(data.toString());
  } else {
    console.log(err);
  }
});
