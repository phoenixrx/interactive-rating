// guardar la columna activa
var botonActivo = 0;
var puntuacion = 1;
const botones = document.querySelectorAll(".boton");
const puntos = document.querySelectorAll(".boton");
const pantallas = document.querySelectorAll(".pantalla");

botones.forEach((boton1, ident) => {
  boton1.addEventListener("click", function () {
    establecerClicado(ident);
  });
});

function establecerClicado(ident) {
  botones[ident].classList.remove("clicado");
}

puntos.forEach((punto, indice) => {
  punto.addEventListener("click", function () {
    puntuacion = indice + 1;
    console.log(indice);
    //establecerPuntuacion(indice);
  });
});

puntuar.addEventListener("click", function () {
  establecerPuntuacion(puntuacion);
});

function establecerPuntuacion(indice) {
  console.log(puntuacion);
  pantallas[0].classList.remove("activa");
  pantallas[1].classList.add("activa");
  h2.textContent = "You selected " + indice + " out of 5";
}
