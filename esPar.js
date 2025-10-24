// ESTE ARCHIVO VA EN EL REPOSITORIO DE CALIDAD DE SOFTWARE DENTRO DE LA CARPETA LEARNING-JEST Y DENTRO DE LA SUBCARPETA CONDICIONALES

function esPar(numero){
    if (!Number.isInteger(numero)) 
        throw new TypeError ("numero debe ser entero")
    return numero%2===0;
}
module.exports={esPar}


