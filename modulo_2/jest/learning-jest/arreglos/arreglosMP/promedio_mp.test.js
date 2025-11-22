const { promedioPrecios } = require('./promedio_mp');

describe('Promedio Precios Motos', () => {
    test('Happy path: [4000,9000,2000,10000] promedio 6250', () => {
        expect(promedioPrecios([4000, 9000, 2000, 10000])).toBe(6250);
    });
    test('Happy path: [500,100] promedio 300', () => {
        expect(promedioPrecios([500, 100])).toBe(300);
    });

    test('Sad path: lista inválida', () => {
        expect(() => promedioPrecios([])).toThrow('lista de precios inválida');
        expect(() => promedioPrecios('concesionario')).toThrow('lista de precios inválida');
    });
});
