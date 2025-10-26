// ESTE ARCHIVO VA EN EL REPOSITORIO DE CALIDAD DE SOFTWARE DENTRO DE LA CARPETA LEARNING-JEST
//  Y DENTRO DE LA SUBCARPETA CICLOS

function sumaHasta(numero) {
    if (typeof numero !== 'number'
        || Number.isNaN(numero) 
        || !Number.isInteger(numero)
        || numero < 1 
        ) {
        throw new TypeError("numero invalido");
        }
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        total += i;
    }
    return total;
}

module.exports = { sumaHasta };
