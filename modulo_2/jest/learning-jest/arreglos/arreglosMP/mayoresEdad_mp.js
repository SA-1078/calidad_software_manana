function motosAltoCilindraje(cilindrajes) {
    if (!Array.isArray(cilindrajes))
        throw new TypeError("lista de cilindrajes inválida");
    let altoCilindraje = [];
    for (let i = 0; i < cilindrajes.length; i++) {
        if (cilindrajes[i] < 0)
            throw new TypeError("cilindraje inválido");
        if (cilindrajes[i] >= 600) {
            altoCilindraje.push(cilindrajes[i]);
        }
    }
    return altoCilindraje;
}
module.exports = { motosAltoCilindraje }
