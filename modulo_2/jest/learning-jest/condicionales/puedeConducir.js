// ESTE ARCHIVO VA EN EL REPOSITORIO DE CALIDAD DE SOFTWARE DENTRO DE LA CARPETA LEARNING-JEST
//  Y DENTRO DE LA SUBCARPETA CONDICIONALES

function puedeConducir(edad){
    if(!Number.isInteger(edad) || edad<0)
        throw new TypeError("edad invalida");
    return edad>=18 ? 'Si':'No';
}
module.exports={puedeConducir}