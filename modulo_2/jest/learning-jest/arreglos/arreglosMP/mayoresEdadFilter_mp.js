function motosAltoCilindrajeFilter(cilindrajes) {
    if (!Array.isArray(cilindrajes))
        throw new TypeError("lista de cilindrajes inválida");
    return cilindrajes.filter(cc => cc >= 600);
}
module.exports = { motosAltoCilindrajeFilter }
