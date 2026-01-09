describe("smoke", () => {
    test("jest está configurado", () => {
        expect(true).toBe(true);
    });
    test("jest está configurado", () => {
        const num1: number = 1;
        const num2: number = 2;
        const resultado: number = num1 + num2;
        expect(resultado).toBe(3);
    });
});