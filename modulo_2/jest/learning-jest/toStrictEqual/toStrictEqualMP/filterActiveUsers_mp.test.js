const { filtrarMotosDisponibles } = require('./filterActiveUsers_mp');

describe('Filtrar Motos Disponibles', () => {
    test('Happy path: Motos filtradas Correctamente', () => {
        const motos = [
            { id: 1, modelo: "MT09", disponible: true },
            { id: 2, modelo: "R15", disponible: false },
            { id: 3, modelo: "NMAX", disponible: true }
        ]
        const response = filtrarMotosDisponibles(motos);
        const expectedMotos = [
            { id: 1, modelo: "MT09", disponible: true },
            { id: 3, modelo: "NMAX", disponible: true }
        ]
        expect(response).toStrictEqual(expectedMotos);
    });
    test('Sad path: diferencia tipos en objetos', () => {
        const motos = [
            { id: 1, modelo: "MT09", disponible: true },
            { id: 2, modelo: "R15", disponible: false },
        ]
        const response = filtrarMotosDisponibles(motos);
        const expectedMotos = [
            { id: 1, modelo: "MT09", disponible: "true" },
        ]
        expect(response).not.toStrictEqual(expectedMotos);
    });
});
