const { motosAltoCilindraje } = require('./mayoresEdad_mp');

describe('Motos Alto Cilindraje', () => {
    test('Happy path: [150,600,1000,250] alto cilindraje [600,1000]'
        , () => {
            expect(motosAltoCilindraje([150, 600, 1000, 250])).toEqual([600, 1000]);
        });
    test('Happy path: [] alto cilindraje []', () => {
        expect(motosAltoCilindraje([])).toEqual([]);
    });

    test('Sad path: cilindrajes invalidos', () => {
        expect(() => motosAltoCilindraje('taller')).toThrow('lista de cilindrajes inválida');
        expect(() => motosAltoCilindraje([-100])).toThrow('cilindraje inválido');
    });
});
