const { maximoPrecioMath } = require('./maximo_con_math_mp');

describe('Maximo Precio Moto con Math', () => {
    test('Happy path: [4000,9000,2000,10000] mayor 10000', () => {
        expect(maximoPrecioMath([4000, 9000, 2000, 10000])).toBe(10000);
    });
    test('Happy path: [500,100] mayor 500', () => {
        expect(maximoPrecioMath([500, 100])).toBe(500);
    });
    test('Sad path: lista invalida', () => {
        expect(() => maximoPrecioMath([])).toThrow('lista de precios inválida');
        expect(() => maximoPrecioMath('concesionario')).toThrow('lista de precios inválida');
    });
});
