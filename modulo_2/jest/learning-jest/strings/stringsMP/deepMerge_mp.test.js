const { fusionarEspecificaciones, normalizarMoto } = require('./deepMerge_mp');

describe('Fusión de Especificaciones', () => {
    test('Happy path: fusionarEspecificaciones combina objetos anidados por valor', () => {
        const a = {
            motor:
                { tipo: '4 tiempos', cilindraje: 150 },
            disponible: true
        }
        const b = {
            motor:
                { cilindraje: 200 },
            disponible: true,
            color: 'rojo'
        }
        const response = fusionarEspecificaciones(a, b);
        expect(response).toEqual(
            {
                motor:
                    { tipo: '4 tiempos', cilindraje: 200 },
                disponible: true,
                color: 'rojo'
            }
        );
    });

    test('Happy path: normalizarMoto retorna estructura con promedio de costos', () => {
        const moto = { modelo: 'Yamaha', revisiones: [50, 100, 75] }
        const response = normalizarMoto(moto);
        expect(response).toEqual(
            { modelo: 'Yamaha', revisiones: [50, 100, 75], promedioCosto: 75 }
        );
    });

    test('Sad path: deep merge con parametros inválidos', () => {
        expect(() => fusionarEspecificaciones(null, {})).toThrow('specs1 debe ser objeto');
        expect(() => fusionarEspecificaciones({}, null)).toThrow('specs2 debe ser objeto');
    });

    test('Sad path: normalizarMoto con parametros inválidos', () => {
        expect(() => normalizarMoto(null)).toThrow('moto debe ser objeto');
        expect(() => normalizarMoto({ modelo: 123, revisiones: [50] })).toThrow();
        expect(() => normalizarMoto({ modelo: 'Yamaha', revisiones: [50, 'a'] })).toThrow('revisiones debe contener números válidos');
    });
});
