document.addEventListener('keydown', function(e){
if(e.keyCode == 32){
    console.log("saltar");
    
    if(nivel.muerto == false)
    saltar();
    else {
       
        puntuacion = 0;
        
    }
}


});


var imgBruja;
var ImgBat;

function cargarImagenes() {
    imgBruja = new Image();
    ImgBat = new Image();
    imgBruja.src = "./img/batman.png";
    ImgBat.src = "./img/calavera.png";
}

function cargarMusica() {
    const reproducir = new Audio();
    reproducir.src = "./BatmanSoundtrack.mp3";
    reproducir.play()
}



var ancho = 1180;
var alto = 500;

var canvas;
var ctx;

function inicializar(){
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
cargarImagenes();
}

function borrarCanvas(){
   canvas.width = ancho;
   canvas.height = alto;
}
var suelo = 423;
var bruja = {y: suelo, vy:0, gravedad:1, salto:28, vymax:9, saltando: false};
var nivel = {velocidad: 30,  muerto: false};
var puntuacion = 0;
var bat = {x:ancho + 100, y: suelo-0};




function dibujarBruja() {
//0,0 (posicion de clipping) 64,64 (tamaño) 100,100 (x,y) 50,50 (tamaño reescalar)
ctx.drawImage(imgBruja,0,0,84,84,100,bruja.y,65,65);
}

function dibujarBat () {
ctx.drawImage(ImgBat,0,0,75,48,bat.x,bat.y,65,45);
}

function logicaBat(){
   if(bat.x < -100){
       bat.x = ancho +100;
     puntuacion++;
   }
   else{
       bat.x -= nivel.velocidad;
   }
}


function saltar(){
    bruja.saltando = true;
    bruja.vy = bruja.salto;

}

function gravedad(){
    if(bruja.saltando == true) {

        if(bruja.y - bruja.vy - bruja.gravedad > suelo){
            bruja.saltando= false;
            bruja.vy = 0;
            bruja.y = suelo;
        }
        else{
        bruja.vy -= bruja.gravedad;
        bruja.y -= bruja.vy;
        }
    }
}

function colision(){
   
if(bat.x >= 100 && bat.x <= 165){
  if(bruja.y >= suelo) {
      nivel.muerto = true;
      nivel.velocidad = 0;
      
  }
}

}

function puntaje(){
    ctx.font = "30px impact";
    ctx.fillStyle = "555555";
    

    if(nivel.muerto == true){
        ctx.font = "60px impact";
        ctx.fillText( `GAME OVER`, 440, 250);
        ctx.fillText( `${puntuacion} `,600,50);
        console.log(puntuacion);
    }
}



//BUCLE PRINCIPAL
var FPS = 50;
setInterval(function(){
    principal();
}, 2000/FPS);


function principal(){
    borrarCanvas();
    gravedad();
    colision();
    logicaBat();
    cargarMusica();
    dibujarBat();
    dibujarBruja();
    puntaje();
}

setTimeout(function() {
	var h1= document.createElement('H1')
	h1.innerHTML = "GAME OVER"
	window.location.href = "./pantallaPrincipal.html"
},60000)
