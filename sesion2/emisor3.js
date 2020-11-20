//Emisor de eventos
const Evento = require("./generadorEventos");
const evento1 = "e1";
const evento2 = "e2";

var incremento = 0;

const emisor1 = Evento(evento1, "emisor1: ", 0);
const emisor2 = Evento(evento2, "emisor2: ", "");

function visualizar(entidad, evento, dato) {
  console.log(entidad, evento + "··> ", dato);
}
emisor1.on(visualizar);
emisor2.on(visualizar);
emisiones();

//. . . . . . . . . . . . . .
function emisiones() {
  var incremento2 = incremento;
  var incremento1 = incremento;

  var a = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);
  var b = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);

  setInterval(function () {
    emisor1.emit(incremento1);
    console.log("Duracion 1: " + a / 1000);
    a = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);
    incremento1++;
  }, a); // entre 2 y 5 segundos
  setInterval(function () {
    emisor2.emit(incremento2);
    console.log("Duracion 1: " + a / 1000);
    a = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);
    incremento2++;
  }, b); // entre 2 y 5 segundos
}