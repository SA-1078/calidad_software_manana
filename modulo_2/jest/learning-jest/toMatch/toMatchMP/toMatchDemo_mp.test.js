const { validarPlaca,
    encontrarModeloEnTexto,
    limpiarDescripcionMoto } = require('./toMatchDemo_mp');

describe('toMatch matcher Placas', () => {
    test('Happy path: validar placas', () => {
        expect('ABC-123').toMatch(/^[A-Z]{3}-\d{3}$/);
        expect(validarPlaca('XYZ-987')).toBe(true);
    });

    test('Happy path: encontrar modelo con regex', () => {
        expect(encontrarModeloEnTexto('Vendo moto Yamaha R15', 'Yamaha')).toBe(true);
    });

    test('Sad path: placa o modelo inválido', () => {
        expect(() => validarPlaca(123)).toThrow('placa debe ser string');
        expect(() => encontrarModeloEnTexto('Texto', 123))
            .toThrow('texto y modelo deben ser strings');
        expect(validarPlaca('abc-123')).toBe(false);
    });

    test('Happy/Sad path: limpiar descripción', () => {
        expect(limpiarDescripcionMoto('   Moto   en   buen   estado   ')).toMatch(/^Moto en buen estado$/);
        expect(() => limpiarDescripcionMoto(null)).toThrow('texto debe ser string');
    });
});
