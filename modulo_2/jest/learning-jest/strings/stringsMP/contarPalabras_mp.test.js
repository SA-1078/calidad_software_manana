const { contarPalabrasDescripcion } = require('./contarPalabras_mp');

describe('Contar Palabras Descripción', () => {
    test('Happy path: Moto Yamaha R15 -> 3', () => {
        const response = contarPalabrasDescripcion(
            'Moto Yamaha R15'
        )
        expect(response).toBe(3);
    });
    test('Sad path: ERROR',
        () => {
            expect(() => contarPalabrasDescripcion(null
            )).toThrow('descripción inválida');
            expect(() => contarPalabrasDescripcion(''))
                .toThrow('descripción inválida');
        });
});
