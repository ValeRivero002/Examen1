import Mostrar_Frase from "./frase.js";

describe("Frase", () => {
  it("deberia imprimir la frase", () => {
    expect(Mostrar_Frase("Hola Como estas")).toEqual("Hola Como estas");
  });
});
