const { esMotoValida,
    obtenerKilometraje,
    requiereModeloValido } = require('./truthyFalsy_mp');

describe('Truthy / Falsy Motos', () => {
    test('Happy: valores truthy/falsy para moto', () => {
        expect(esMotoValida({ modelo: 'R15' })).toBeTruthy();
        expect(esMotoValida('Yamaha')).toBeTruthy();
        expect(esMotoValida(null)).toBeFalsy();
        expect(esMotoValida(undefined)).toBeFalsy();
    });

    test('Happy: obtenerKilometraje usa falsy para asignar defecto', () => {
        expect(obtenerKilometraje(5000, 0)).toBe(5000);
        expect(obtenerKilometraje(0, 100)).toBe(100);
        expect(obtenerKilometraje(null, 0)).toBe(0);
    });

    test('Sad: requiereModeloValido lanza en falsy o no string', () => {
        expect(() => requiereModeloValido('')).toThrow('modelo requerido');
        expect(() => requiereModeloValido('   ')).toThrow('modelo requerido');
        expect(() => requiereModeloValido(null)).toThrow('modelo requerido');
        expect(requiereModeloValido(' MT09 ')).toBe('MT09');
    });
});
