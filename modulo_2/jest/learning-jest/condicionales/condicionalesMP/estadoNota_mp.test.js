const { estadoMoto } = require('./estadoNota_mp');

describe('Estado Moto', () => {
    test('Happy path: 8 Excelente', () => {
        expect(estadoMoto(8)).toBe('Excelente');
    });
    test('Happy path: 5 Bueno y 2 Malo', () => {
        expect(estadoMoto(5)).toBe('Bueno');
        expect(estadoMoto(2)).toBe('Malo');
    });
    test('Sad path: puntaje invalido', () => {
        expect(() => estadoMoto(-1)).toThrow('puntaje inválido');
        expect(() => estadoMoto('10')).toThrow('puntaje inválido');
        expect(() => estadoMoto(50)).toThrow('puntaje inválido');
    });
});
