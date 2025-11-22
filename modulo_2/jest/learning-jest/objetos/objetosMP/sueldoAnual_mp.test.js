const { costoMantenimientoAnual } = require('./sueldoAnual_mp');

describe('Costo Mantenimiento Anual', () => {
    test('Happy path: 50-> 600', () => {
        expect(costoMantenimientoAnual(
            {
                marca: 'Bajaj',
                costoMensual: 50
            }
        )
        ).toBe(600);
    });

    test('Sad path: costo mensual invalido', () => {
        expect(() => costoMantenimientoAnual({
            costoMensual: -1
        })).toThrow('costo mensual inválido');
        expect(() => costoMantenimientoAnual(null))
            .toThrow('moto inválida');
    });
});
