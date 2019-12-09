var http = require("http")
var fs = require("fs")
var puerto = 3000
var puntuacion = require("./archivo.json")

var servidor = http.createServer(function (consulta, respuesta) {
  if (consulta.url === "/jugador") {
      if (consulta.method === "POST") {
        var contenido = " "
        consulta.on("data", function (bloque_texto) {
          contenido += bloque_texto
        })
        consulta.on("end", function () {
         

          console.log(contenido)
          respuesta.end("gracias por jugar")
        }
        )
        
      }
      
       
  } else {
    respuesta.statusCode = 404
    respuesta.end('ruta no encontrada :(')
  }
})


servidor.listen(puerto, function () {
  console.log(`servidor escuchando en el puerto ${puerto}`)
})