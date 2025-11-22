const { puedeObtenerLicencia } = require('./puedeConducir_mp');

describe('Puede Obtener Licencia Moto', () => {
    test('Happy path: 20 puede obtener licencia', () => {
        const respuesta = puedeObtenerLicencia(20);
        expect(respuesta).toBe('Si');
    });
    test('Happy path: 16 NO puede obtener licencia', () => {
        const respuesta = puedeObtenerLicencia(16);
        expect(respuesta).toBe('No');
    });
    test('Sad path: edad invalida', () => {
        expect(() => puedeObtenerLicencia(-1)).toThrow('edad inválida');
        expect(() => puedeObtenerLicencia('19')).toThrow('edad inválida');
    });
});
