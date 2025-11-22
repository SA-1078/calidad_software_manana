const { esStockPar } = require('./esPar_mp');

describe('Es Stock Par', () => {
    test('Happy path: 8 es par', () => {
        expect(esStockPar(8)).toBe(true);
    });
    test('Happy path: 7 NO es par', () => {
        expect(esStockPar(7)).toBe(false);
    });
    test('Sad path: numero no entero', () => {
        expect(() => esStockPar(3.5)).toThrow('número de stock debe ser entero');
        expect(() => esStockPar('10')).toThrow('número de stock debe ser entero');
    });
});
