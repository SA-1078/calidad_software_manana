const { sumaVentasConsecutivas } = require('./sumaHasta_mp');

describe('Suma Ventas Consecutivas', () => {

    test('Happy path: 5 ventas suma 15', () => {
        expect(sumaVentasConsecutivas(5)).toBe(15);
    });

    test('Happy path: 1 venta suma 1', () => {
        expect(sumaVentasConsecutivas(1)).toBe(1);
    });

    test('Sad path: número inválido', () => {
        expect(() => sumaVentasConsecutivas(0)).toThrow('número de ventas inválido');
        expect(() => sumaVentasConsecutivas('10')).toThrow('número de ventas inválido');
        expect(() => sumaVentasConsecutivas(2.5)).toThrow('número de ventas inválido');
    });
});
