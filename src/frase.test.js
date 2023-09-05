import { Mostrar_Frase,Separar_Frase } from "./frase.js";

describe("Frase", () => {
  it("deberia imprimir la frase", () => {
    expect(Mostrar_Frase("Hola Como estas")).toEqual("Hola Como estas");
  });
  it("deberia imprimir la primera palabra", () => {
    expect(Separar_Frase("Hola Como estas")).toEqual("Hola");
  });
});
