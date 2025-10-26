// ESTE ARCHIVO VA EN EL REPOSITORIO DE CALIDAD DE SOFTWARE DENTRO DE LA CARPETA LEARNING-JEST 
// Y DENTRO DE LA SUBCARPETA CICLOS

const { contarPares } = require('./contarPares');

describe('contarPares', () => {
    test('Happy path: [1,2,3,4,5] 3 ', () => {
        expect(contarPares([1,2,3,4,6])).toBe(3);
    });
    test('Happy path: [] es 0', () => {
        expect(contarPares([])).toBe(0);
    });
    test('Sad path: numero invalido', () => {
        expect(() => contarPares('no array')).toThrow('arreglo invalido');
    });
});