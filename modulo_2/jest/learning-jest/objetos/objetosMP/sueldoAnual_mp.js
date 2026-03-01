function costoMantenimientoAnual(moto) {
    if (!moto || typeof moto !== 'object') {
        throw new TypeError('moto inválida');
    }
    const { costoMensual } = moto;
    if (costoMensual === undefined || typeof costoMensual !== 'number' || costoMensual < 0) {
        throw new TypeError('costo mensual inválido');
    }
    return costoMensual * 12;
}
module.exports = { costoMantenimientoAnual };
