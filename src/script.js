import "./style.css";

window.onload = function () {

let quien = ['mi canario','mi cocodrilo','mi hermana','mi profesor'];
let accion = ['se comió','rompió','quemó','alquiló'];
let que = ['mi ordenador','la casa','España','el internet'];
let cuando = ['el año pasado','antes de la clase','ayer','no sé cuando'];

let palabra1 = Math.floor(Math.random() * quien.lenght);
let palabra2 = Math.floor(Math.random() * accion.lenght);
let palabra3 = Math.floor(Math.random() * que.lenght);
let palabra4 = Math.floor(Math.random() * cuando.lenght);

document.querySelector("#excusa").innerHTML = quien[palabra1] + accion[palabra2] + que[palabra3] + cuando[palabra4];
};