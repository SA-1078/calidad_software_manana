const { Motocicleta, crearMotocicleta, esFechaVenta } = require('./instancias_mp');

describe('InstanceOf Motocicleta', () => {
    test('Happy: crearMotocicleta retorna instancia de Motocicleta', () => {
        const m = crearMotocicleta('Kawasaki', 2023);
        expect(m).toBeInstanceOf(Motocicleta);
        expect(m).not.toBeInstanceOf(Date);
    });

    test('Happy: esFechaVenta detecta instancias Date válidas', () => {
        expect(esFechaVenta(new Date())).toBe(true);
        expect(esFechaVenta(new Date('invalid'))).toBe(false); // Date inválida
    });

    test('Sad: crearMotocicleta con datos inválidos', () => {
        expect(() => crearMotocicleta('', 2020)).toThrow('marca inválida');
        expect(() => crearMotocicleta('Honda', -1)).toThrow('modelo inválido');
        expect(esFechaVenta('2025-01-01')).toBe(false);
    });
});
