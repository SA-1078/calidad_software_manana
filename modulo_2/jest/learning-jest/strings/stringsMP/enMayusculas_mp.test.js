const { modeloEnMayusculas } = require('./enMayusculas_mp');

describe('Modelo En Mayusculas', () => {
    test('Happy path: yamaha -> YAMAHA', () => {
        const response = modeloEnMayusculas('yamaha')
        expect(response).toBe('YAMAHA');
    });
    test('Sad path: ERROR',
        () => {
            expect(() => modeloEnMayusculas(null
            )).toThrow('modelo inválido');
            expect(() => modeloEnMayusculas(123))
                .toThrow('modelo inválido');
        });
});
