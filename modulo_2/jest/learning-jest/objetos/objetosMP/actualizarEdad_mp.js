function actualizarKilometraje(moto, kilometraje) {
    if (!moto || typeof moto !== 'object') {
        throw new TypeError('moto inválida');
    }
    if (!Number.isInteger(kilometraje) || kilometraje < 0) {
        throw new TypeError('kilometraje inválido');
    }
    moto.kilometraje = kilometraje;
    return moto;
}
module.exports = { actualizarKilometraje };
