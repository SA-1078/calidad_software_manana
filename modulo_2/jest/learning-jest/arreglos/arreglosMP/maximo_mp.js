function maximoPrecio(preciosMotos) {
    if (!Array.isArray(preciosMotos) || preciosMotos.length === 0) {
        throw new TypeError("lista de precios inválida");
    }
    let mayorPrecio = preciosMotos[0];
    for (let i = 1; i < preciosMotos.length; i++) {
        if (preciosMotos[i] > mayorPrecio) {
            mayorPrecio = preciosMotos[i];
        }
    }
    return mayorPrecio;
}
module.exports = { maximoPrecio };
