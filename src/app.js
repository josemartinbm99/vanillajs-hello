import "./style.css";

window.onload = function() {
  let quien = ["Mi canario ", "Mi cocodrilo ", "Mi hermana ", "Mi profesor "];
  let accion = ["se comió ", "rompió ", "quemó ", "alquiló "];
  let que = ["mi ordenador ", "la casa ", "España ", "el internet "];
  let cuando = [
    "el año pasado.",
    "antes de la clase.",
    "ayer.",
    "no sé cuando."
  ];
  let palabra1 = Math.floor(Math.random() * quien.length);
  let palabra2 = Math.floor(Math.random() * accion.length);
  let palabra3 = Math.floor(Math.random() * que.length);
  let palabra4 = Math.floor(Math.random() * cuando.length);

  document.querySelector("#excuse").innerHTML =
    quien[palabra1] + accion[palabra2] + que[palabra3] + cuando[palabra4];
};
