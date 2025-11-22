const { sumarCostosMantenimiento } = require('./sumObjects_mp');

describe('Suma de Costos Mantenimiento', () => {
    test('Happy path: Suma de costos correctamente', () => {
        const costo1 = { repuestos: 200, manoDeObra: 100 };
        const costo2 = { repuestos: 150, manoDeObra: 80 };

        const response = sumarCostosMantenimiento(costo1, costo2);
        expect(response).toStrictEqual({ repuestos: 350, manoDeObra: 180 });
    });
    test('Sad path: Falla si falta una propiedad o cambia el tipo', () => {
        const costo1 = { repuestos: 200, manoDeObra: 100 };
        const costo2 = { repuestos: 150, manoDeObra: 80, extra: 0 };

        const response = sumarCostosMantenimiento(costo1, costo2);
        expect(response).toStrictEqual({ repuestos: 350, manoDeObra: 180 });
    })
})
