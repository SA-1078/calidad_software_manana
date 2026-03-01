function esStockPar(numeroStock) {
    if (!Number.isInteger(numeroStock))
        throw new TypeError("número de stock debe ser entero")
    return numeroStock % 2 === 0;
}
module.exports = { esStockPar }
