/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["El vecino", "Luis Suarez", "El presidente", "Goku"];
  let action = ["Miro", "Se despidio", "Aumento", "Rompio"];
  let what = ["Mi ventana", "la selección", "El IRPF", "El Mundo"];
  let when = [
    "Apenas la abri",
    "Mientras estaba en clase",
    "Antes que cobre el sueldo",
    "Cuando tiro una hengidama"
  ];

  function getRandomInt(cantidadElementos) {
    let randomNumber = Math.floor(Math.random() * cantidadElementos);

    return randomNumber;
  }

  let excusa = `
  ${who[getRandomInt(who.length)]}
  ${action[getRandomInt(action.length)]}
  ${what[getRandomInt(what.length)]}
  ${when[getRandomInt(when.length)]}
`;

  document.getElementById("excusas").innerHTML = excusa;
};
