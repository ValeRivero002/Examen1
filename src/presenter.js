import Mostrar_Frase from "./frase";

const first = document.querySelector("#primer");
const form = document.querySelector("#frase-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = first.value;


  div.innerHTML = "<p>El resultado es: " + Mostrar_Frase(text) + "</p>";
});
