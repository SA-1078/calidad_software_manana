const { buscarModelo } = require('./buscarPalabra_mp');

describe('Buscar Modelo', () => {
    test('Happy path: Buscar Modelo', () => {
        const response = buscarModelo(
            'Moto Yamaha R15 2022', 'R15'
        )
        expect(response).toBe(true);
        const response2 = buscarModelo(
            'Moto Yamaha R15 2022', 'MT09'
        )
        expect(response2).toBe(false);
    });
    test('Sad path: ERROR',
        () => {
            expect(() => buscarModelo(null, 'R15'
            )).toThrow('descripción inválida');
            expect(() => buscarModelo('', 344))
                .toThrow('descripción inválida');
        });
});
