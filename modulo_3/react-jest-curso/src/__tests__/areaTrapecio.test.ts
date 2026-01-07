describe("Pruebas de Geometría", () => {

    test("debe calcular correctamente el área de un trapecio", () => {
        const baseMayor: number = 10;
        const baseMenor: number = 6;
        const altura: number = 5;
        const area: number = ((baseMayor + baseMenor) * altura) / 2;
        expect(area).toBe(40);
    });

    test("debe dar un resultado decimal si las medidas lo requieren", () => {
        const area: number = ((5 + 4) * 3) / 2;
        expect(area).toBe(13.5);
    });

});