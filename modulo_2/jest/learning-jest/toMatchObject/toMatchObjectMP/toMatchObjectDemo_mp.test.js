const { registrarMotoVenta, obtenerDatosMoto, compararMotos } = require('./toMatchObjectDemo_mp');

describe('toMatchObject matcher Motos', () => {
    test("Happy path: moto coincide parcialmente con estructura esperada", () => {
        const moto = registrarMotoVenta('MT09', 'Yamaha');
        expect(moto).toMatchObject(
            { modelo: 'MT09', marca: 'Yamaha', disponible: true });
    });


    test('Happy path: obtenerDatosMoto retorna subconjunto esperado', () => {
        const moto = {
            modelo: 'R15',
            marca: 'Yamaha',
            disponible: true,
            extra: 'no importa'
        };
        expect(obtenerDatosMoto(moto)).toMatchObject({ marca: 'Yamaha', disponible: true });
    });


    test('Sad path: errores de tipos y comparación incorrecta', () => {
        expect(() => registrarMotoVenta(123, 'Yamaha'))
            .toThrow('Modelo y marca deben ser strings');
        const m1 = { marca: 'Honda', disponible: true };
        const m2 = { marca: 'Suzuki', disponible: true };
        expect(compararMotos(m1, m2)).toBe(false);
    });
});
