function calcularTotalTaller(items, ivaPorcentaje) {
    if (!Array.isArray(items)) {
        throw new TypeError('items inválidos');
    }
    if (typeof ivaPorcentaje !== 'number' || ivaPorcentaje < 0 || ivaPorcentaje > 100) {
        throw new TypeError('IVA inválido');
    }
    let subtotal = 0;
    for (const item of items) {
        if (!item || typeof item.servicio !== 'string' ||
            typeof item.precioUnitario !== 'number' ||
            typeof item.cantidad !== 'number' ||
            item.precioUnitario < 0 ||
            item.cantidad < 0
        ) {
            throw new TypeError('items inválidos');
        }
        subtotal += item.precioUnitario * item.cantidad;
    }
    const iva = subtotal * (ivaPorcentaje / 100);
    const total = subtotal + iva;
    return {
        subtotal,
        iva,
        total
    };
}
module.exports = { calcularTotalTaller };
