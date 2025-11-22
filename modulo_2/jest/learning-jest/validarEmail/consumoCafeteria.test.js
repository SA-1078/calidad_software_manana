const { calcularTotalCafeteria } = require("./consumoCafeteria");

describe("calcularTotalCafeteria", () => {
  test("Path: Calcular correctamente", () => {
    const items =
      [
        {
          nombre: "Café",
          precioUnitario: 500,
          cantidad: 3
        },
        {
          nombre: "Empanada",
          precioUnitario: 300,
          cantidad: 3
        }
      ];

    const resultado = calcularTotalCafeteria(items, 15);
    expect(resultado).toBe(2415)
  });
  test('Sad Path: Valores de ingreso errados', () => {

  })

});