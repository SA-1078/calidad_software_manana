// ESTE ARCHIVO VA EN EL REPOSITORIO DE CALIDAD DE SOFTWARE DENTRO DE LA CARPETA LEARNING-JEST Y DENTRO DE LA SUBCARPETA CONDICIONALES


function estadoNota(nota){
    if(typeof nota !== 'number'
        || Number.isNaN(nota)
        || nota > 10
        || nota < 0
        )
        throw new TypeError("nota invalida");
    if  (nota>=7) return 'Aprobado';
    if  (nota>=4) return 'Supletorio';
    return 'Reprobado'

}
module.exports={estadoNota}