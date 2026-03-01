function contarPalabrasDescripcion(descripcion) {
    if (!descripcion || typeof descripcion !== 'string') {
        throw new TypeError('descripción inválida');
    }
    const descripcionTrimmed = descripcion.trim();
    if (descripcionTrimmed === '')
        throw new TypeError('descripción inválida');
    return descripcionTrimmed.split(/\s+/).length;
}
module.exports = { contarPalabrasDescripcion }
