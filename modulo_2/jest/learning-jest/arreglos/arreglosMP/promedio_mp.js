function promedioPrecios(precios) {
    if (!Array.isArray(precios) || precios.length == 0)
        throw new TypeError("lista de precios inválida");
    let suma = 0;
    let indice = 0;
    while (indice < precios.length) {
        suma += precios[indice];
        indice++
    }
    return suma / precios.length;
}
module.exports = { promedioPrecios }
