const { calcularTotalTaller } = require("./consumoTaller_mp");

describe("calcularTotalTaller", () => {
    test("Path: Calcular correctamente", () => {
        const items =
            [
                {
                    servicio: "Cambio de Aceite",
                    precioUnitario: 50000,
                    cantidad: 1
                },
                {
                    servicio: "Ajuste de Frenos",
                    precioUnitario: 20000,
                    cantidad: 2
                }
            ];

        const resultado = calcularTotalTaller(items, 19); // IVA 19%
        // Subtotal: 50000 + 40000 = 90000
        // IVA: 90000 * 0.19 = 17100
        // Total: 107100
        expect(resultado.total).toBe(107100);
        expect(resultado.subtotal).toBe(90000);
    });

    test('Sad Path: Valores de ingreso errados', () => {
        expect(() => calcularTotalTaller(null, 19)).toThrow('items inválidos');
        expect(() => calcularTotalTaller([], -1)).toThrow('IVA inválido');
        expect(() => calcularTotalTaller([{ servicio: 'X', precioUnitario: -100, cantidad: 1 }], 19))
            .toThrow('items inválidos');
    })

});
