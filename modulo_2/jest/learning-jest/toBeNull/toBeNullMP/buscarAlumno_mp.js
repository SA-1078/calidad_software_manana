function buscarMoto(motos, modelo) {
    if (!Array.isArray(motos))
        throw new TypeError('motos debe ser un array');
    if (typeof modelo !== 'string' || !modelo.trim())
        throw new TypeError('modelo inválido');
    const found = motos.find(m => m?.modelo === modelo.trim());
    return found ?? null;
}

function leerProp(obj, prop) {
    if (!obj || typeof obj !== 'object')
        throw new TypeError('obj inválido');
    if (typeof prop !== 'string' || !prop)
        throw new TypeError('prop inválida');
    return obj[prop];
}

module.exports = { buscarMoto, leerProp };
