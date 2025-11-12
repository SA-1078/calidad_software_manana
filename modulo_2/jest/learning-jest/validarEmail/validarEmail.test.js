const {validarEmail} = require('./validarEmail');

describe('Validar correo',()=>{
    test('Happy path: Correo valido',()=>{
        const response = validarEmail('dylanfer@gmail.com')
        expect(response).toBe(true);
    })
    test('Happy path: Correo valido',()=>{
        const response = validarEmail('dylanfergmail.com')
        expect(response).toBe(false);
    })
    test('Sad path: Correo invalido',()=>{
        expect(() => validarEmail(1234)).toThrow('email debe ser string');
    })
})