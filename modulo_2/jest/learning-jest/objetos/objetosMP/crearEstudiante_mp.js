function crearMoto(marca, modelo) {
    if (typeof marca !== 'string' || !marca.trim()) {
        throw new TypeError('marca inválida');
    }
    if (!Number.isInteger(modelo) || modelo < 1900) {
        throw new TypeError('modelo inválido');
    }
    return { marca: marca.trim(), modelo };
}

module.exports = { crearMoto };
