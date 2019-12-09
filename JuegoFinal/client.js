
var fs = require("fs")
var texto = fs.readFileSync("./archivo.json","utf-8")

var usuario = JSON.parse(texto)

usuario.push(puntuacion)

usuario = JSON.stringify(usuario)

fs.writeFileSync("./archivo.json",usuario)

var puntuacion = 0;

console.log(puntuacion);
    