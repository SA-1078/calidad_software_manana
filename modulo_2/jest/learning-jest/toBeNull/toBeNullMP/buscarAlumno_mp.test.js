const { buscarMoto, leerProp } = require('./buscarAlumno_mp');

describe('Null / Undefined / Defined Motos', () => {
    test('Happy: buscarMoto devuelve objeto o null', () => {
        const inventario = [
            { modelo: 'MT09', id: 1 },
            { modelo: 'R15', id: 2 }
        ];
        expect(buscarMoto(inventario, 'MT09'))
            .toEqual({ modelo: 'MT09', id: 1 });
        expect(buscarMoto(inventario, 'NoExiste')).toBeNull();
    });

    test('Happy: leerProp puede ser defined o undefined', () => {
        const moto = { marca: 'Yamaha', color: undefined };
        expect(leerProp(moto, 'marca')).toBeDefined();
        expect(leerProp(moto, 'color')).toBeUndefined();
        expect(leerProp(moto, 'precio')).toBeUndefined();
    });

    test('Sad: parámetros inválidos', () => {
        expect(() => buscarMoto('no array', 'MT09'))
            .toThrow('motos debe ser un array');
        expect(() => buscarMoto([], '')).toThrow('modelo inválido');
        expect(() => leerProp(null, 'a')).toThrow('obj inválido');
        expect(() => leerProp({}, 123)).toThrow('prop inválida');
    });
});
