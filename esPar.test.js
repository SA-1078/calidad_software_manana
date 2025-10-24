// ESTE ARCHIVO VA EN EL REPOSITORIO DE CALIDAD DE SOFTWARE DENTRO DE LA CARPETA LEARNING-JEST Y DENTRO DE LA SUBCARPETA CONDICIONALES

const { esPar } = require('./esPar');

describe('esPar', () => {
    test('Happy path: 8 es par', () => {
        expect(esPar(8)).toBe(true);
    });
    test('Happy path: 7 NO es par', () => {
        expect(esPar(7)).toBe(false);
    });
    test('Sad path: numero no entero', () => {
        expect(() => esPar(3.5)).toThrow('numero debe ser entero');
        expect(() => esPar('10')).toThrow('numero debe ser entero');
    });
});