// ESTE ARCHIVO VA EN EL REPOSITORIO DE CALIDAD DE SOFTWARE DENTRO DE LA CARPETA LEARNING-JEST Y DENTRO DE LA SUBCARPETA CICLOS

const { sumaHasta } = require('./sumaHasta');

describe('sumaHasta', () => {
    test('Happy path: numero 5 suma es', () => {
        expect(sumaHasta(5)).toBe(true);
    });
    test('Happy path: numero 1 suma es ', () => {
        expect(sumaHasta(7)).toBe(false);
    });
    test('Sad path: numero invalido', () => {
        expect(() => sumaHasta(0)).toThrow('numero invalido');
        expect(() => sumaHasta('10')).toThrow('numero invalida');
        expect(() => sumaHasta(2.5)).toThrow('numero invalida');
    });
});