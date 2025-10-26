// ESTE ARCHIVO VA EN EL REPOSITORIO DE CALIDAD DE SOFTWARE DENTRO DE LA CARPETA LEARNING-JEST
//  Y DENTRO DE LA SUBCARPETA CICLOS
function contarPares(arreglo){
    if (!Array.isArray(arreglo)) {
        throw new TypeError("arreglo inválido");
    }
    let contador = 0;
    for (const item of arreglo){
        if (item % 2 === 0) contador++;
    }
    return contador;
}

module.exports = { contarPares };
