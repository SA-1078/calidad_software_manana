function maximoPrecioMath(preciosMotos) {
    if (!Array.isArray(preciosMotos) || preciosMotos.length == 0)
        throw new TypeError("lista de precios inválida");
    return Math.max(...preciosMotos);
}
module.exports = { maximoPrecioMath }
