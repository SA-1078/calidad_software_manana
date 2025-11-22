const { obtenerAccesorios,
    descripcionContiene,
    agregarAccesorio } = require('./toContainDemo_mp');

describe('toContain Matcher Accesorios', () => {
    test('Happy path: accesorio dentro de array', () => {
        const accesorios = obtenerAccesorios();
        expect(accesorios).toContain('casco');
    });
    test('Happy path: palabra dentro de descripcion',
        () => {
            const response = descripcionContiene('Moto con frenos ABS', 'ABS');
            expect(response).toBe(true);
        });
    test('Sad path: accesorio no encontrado',
        () => {
            const accesorios = obtenerAccesorios();
            expect(accesorios).not.toContain('maleta');
        });
    test('Sad path: argumentos invalidos',
        () => {
            expect(() => agregarAccesorio({}, 'casco'))
                .toThrow('Lista debe ser array');
        });
});
