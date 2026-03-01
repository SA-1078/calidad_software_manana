function buscarModelo(descripcion, modelo) {
    if (!descripcion
        || !modelo
        || typeof descripcion !== 'string'
        || typeof modelo !== 'string'
    ) {
        throw new TypeError("descripción inválida");
    }
    return descripcion.includes(modelo);
}
module.exports = { buscarModelo };
