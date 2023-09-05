import { Mostrar_Frase,Separar_Frase } from "./frase";

const first = document.querySelector("#primer");
const form = document.querySelector("#frase-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = first.value;
  const resu= Separar_Frase(text);

  div.innerHTML = "<p>El resultado es: " + Mostrar_Frase(text) + "Frase: "+ resu+ "</p>";
});
