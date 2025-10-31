const {actualizarEdad} = require('./actualizarEdad');

describe('Actualizar Edad', ()=>{
    test('Happy path: 30-> 30', () =>{
        const response = actualizarEdad(
            {
                nombre: 'Juan',
                edad: 39
            }, 60
        )
        expect(response.edad).toBe(60);
    });
    test('Sad path: persona / edad invalidos',
        ()=>{
            expect(()=>actualizarEdad(
                null, 10
            )).toThrow('persona inválida');
            expect(() => actualizarEdad({}, -1))
                .toThrow('edad inválida');
        });
});