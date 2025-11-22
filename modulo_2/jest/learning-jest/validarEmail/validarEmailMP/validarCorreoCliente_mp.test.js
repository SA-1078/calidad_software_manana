const { validarCorreoCliente } = require('./validarCorreoCliente_mp');

describe('Validar Correo Cliente', () => {
    test('Happy path: que devuelva false para email inválido', () => {
        const response = validarCorreoCliente('cliente.sin.dominio');
        expect(response).toBe(false);
    });
    test('Happy path: que devuelva true para email válido', () => {
        const response = validarCorreoCliente('cliente@motos.com');
        expect(response).toBe(true);
    });
    test('Sad path: argumentos inválidos',
        () => {
            expect(() => validarCorreoCliente(3455)).toThrow('email debe ser string');
        });
});
