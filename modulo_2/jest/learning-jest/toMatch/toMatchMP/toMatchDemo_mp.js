function validarPlaca(placa) {
    if (typeof placa !== 'string')
        throw new TypeError('placa debe ser string');
    // Formato ejemplo: ABC-123
    const regex = /^[A-Z]{3}-\d{3}$/;
    return regex.test(placa);
}

function encontrarModeloEnTexto(texto, modelo) {
    if (typeof texto !== 'string' || typeof modelo !== 'string') {
        throw new TypeError('texto y modelo deben ser strings');
    }
    return new RegExp(modelo, 'i').test(texto);
}

function limpiarDescripcionMoto(texto) {
    if (typeof texto !== 'string')
        throw new TypeError('texto debe ser string');
    return texto.trim().replace(/\s+/g, ' ');
}

module.exports = { validarPlaca, encontrarModeloEnTexto, limpiarDescripcionMoto };
