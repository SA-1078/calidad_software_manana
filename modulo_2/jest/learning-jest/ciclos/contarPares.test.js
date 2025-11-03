// ESTE ARCHIVO VA EN EL REPOSITORIO DE CALIDAD DE SOFTWARE DENTRO DE LA CARPETA LEARNING-JEST 
// Y DENTRO DE LA SUBCARPETA CICLOS

const { sumaHasta } = require('./sumaHasta');

describe('sumaHasta', ()=>{
    test('Happy path:numero 5 suma es  ', () => {
        expect(sumaHasta(5)).toBe(15);
    });
    test('Happy path: numero 1 suma es ', () => {
        expect(sumaHasta(1)).toBe(1);
    });
    test('Sad path: numero inválido', () => {
        expect(()=>sumaHasta(-1)).toThrow('numero inválido'); 
        expect(()=>sumaHasta('10')).toThrow('numero inválido'); 
        expect(()=>sumaHasta(2.5)).toThrow('numero inválido'); 
    }); 
});