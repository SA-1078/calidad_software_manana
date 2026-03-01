function modeloEnMayusculas(modelo) {
    if (typeof modelo !== 'string' || modelo.trim().length === 0) {
        throw new TypeError('modelo inválido');
    }

    return modelo.toUpperCase();
}
module.exports = { modeloEnMayusculas };
