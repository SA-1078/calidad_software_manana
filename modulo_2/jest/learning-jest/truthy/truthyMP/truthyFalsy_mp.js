function esMotoValida(moto) {
    return !!moto; // coerción booleana
}

function obtenerKilometraje(km, defecto = 0) {
    return km ? km : defecto; // usa falsy
}

function requiereModeloValido(modelo) {
    if (typeof modelo !== 'string' || !modelo.trim()) {
        throw new TypeError('modelo requerido');
    }
    return modelo.trim();
}

module.exports = {
    esMotoValida, obtenerKilometraje,
    requiereModeloValido
};
