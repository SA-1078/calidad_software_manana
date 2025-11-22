function estadoMoto(puntaje) {
    if (typeof puntaje !== 'number'
        || Number.isNaN(puntaje)
        || puntaje > 10
        || puntaje < 0
    )
        throw new TypeError("puntaje inválido");
    if (puntaje >= 7) return 'Excelente';
    if (puntaje >= 4) return 'Bueno';
    return 'Malo'

}
module.exports = { estadoMoto }
