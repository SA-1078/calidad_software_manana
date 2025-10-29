function maximo (arreglo) {
    if (!Array.isArray(arreglo) || arreglo.length == 0)
        throw new TypeError("arreglo inválido");
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}
module.exports={maximo}