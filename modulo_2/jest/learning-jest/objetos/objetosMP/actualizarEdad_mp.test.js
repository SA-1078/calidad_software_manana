const { actualizarKilometraje } = require('./actualizarEdad_mp');

describe('Actualizar Kilometraje', () => {
    test('Happy path: 10000 -> 15000', () => {
        const response = actualizarKilometraje(
            {
                marca: 'Yamaha',
                kilometraje: 10000
            }, 15000
        )
        expect(response.kilometraje).toBe(15000);
    });
    test('Sad path: moto / kilometraje invalidos',
        () => {
            expect(() => actualizarKilometraje(
                null, 1000
            )).toThrow('moto inválida');
            expect(() => actualizarKilometraje({}, -1))
                .toThrow('kilometraje inválido');
        });
});
