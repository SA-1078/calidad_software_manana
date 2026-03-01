const { maximoPrecio } = require('./maximo_mp');

describe('Maximo Precio Moto', () => {
    test('Happy path: [4000,9000,2000,10000] mayor 10000', () => {
        expect(maximoPrecio([4000, 9000, 2000, 10000])).toBe(10000);
    });
    test('Happy path: [500,100] mayor 500', () => {
        expect(maximoPrecio([500, 100])).toBe(500);
    });
    test('Sad path: lista invalida', () => {
        expect(() => maximoPrecio([])).toThrow('lista de precios inválida');
        expect(() => maximoPrecio('concesionario')).toThrow('lista de precios inválida');
    });
});
