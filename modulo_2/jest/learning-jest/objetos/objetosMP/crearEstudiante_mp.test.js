const { crearMoto } = require('./crearEstudiante_mp');

describe('Crear Moto', () => {
    test('Happy path: ', () => {
        expect(crearMoto('Honda', 2022)).toEqual({
            marca: 'Honda',
            modelo: 2022
        });
    });

    test('Sad path: marca / modelo invalidos', () => {

        expect(() => crearMoto('', 2020)).toThrow('marca inválida');
        expect(() => crearMoto('Suzuki', -1)).toThrow('modelo inválido');
    });
});
