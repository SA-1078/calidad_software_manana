function sumaVentasConsecutivas(numeroVentas) {
    if (
        typeof numeroVentas !== "number" ||
        !Number.isInteger(numeroVentas) ||
        numeroVentas < 1
    ) {
        throw new TypeError("número de ventas inválido");
    }
    let total = 0;
    for (let i = 1; i <= numeroVentas; i++) {
        total += i;
    }
    return total;
}

module.exports = { sumaVentasConsecutivas };
