const { contarMotosModeloPar } = require('./contarPares_mp');

describe('Contar Motos Modelo Par', () => {
    test('Happy path: modelos [2020, 2021, 2022] hay 2 pares', () => {
        expect(contarMotosModeloPar([2020, 2021, 2022])).toBe(2);
    });
    test('Happy path: modelos [2021, 2023] hay 0 pares', () => {
        expect(contarMotosModeloPar([2021, 2023])).toBe(0);
    });
    test('Sad path: lista inválida', () => {
        expect(() => contarMotosModeloPar('taller')).toThrow('lista de modelos inválida');
    });
});
