function obtenerAccesorios() {
    return ['casco', 'guantes', 'chaqueta', 'botas']
}

function descripcionContiene(descripcion, palabra) {
    if (typeof descripcion !== 'string' || typeof palabra !== 'string')
        throw new TypeError('Ambos argumentos deben ser strings');
    return descripcion.toLowerCase()
        .includes(palabra.toLowerCase());
}

function agregarAccesorio(lista, accesorio) {
    if (!Array.isArray(lista))
        throw new TypeError('Lista debe ser array');
    if (!accesorio)
        throw new TypeError('Accesorio no puede ser vacio');
    lista.push(accesorio);
    return lista;
}

module.exports = {
    obtenerAccesorios,
    descripcionContiene, agregarAccesorio
}
