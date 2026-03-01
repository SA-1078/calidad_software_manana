function validarObjeto(objeto, nombre = 'obj') {
    if (!objeto
        || typeof objeto !== 'object'
        || Array.isArray(objeto)
    ) {
        throw new TypeError(`${nombre} debe ser objeto`);
    }
}

function fusionarEspecificaciones(specs1, specs2) {
    validarObjeto(specs1, 'specs1');
    validarObjeto(specs2, 'specs2');
    const salida = { ...specs1 };
    for (const [k, v] of Object.entries(specs2)) {
        if (k && typeof v === 'object'
            && !Array.isArray(v)
            && typeof salida[k] === 'object'
            && !Array.isArray(salida[k])
        ) {
            salida[k] = { ...salida[k], ...v };
        } else {
            salida[k] = v;
        }
    }
    return salida;
}

function normalizarMoto(moto) {
    validarObjeto(moto, 'moto');
    const { modelo, revisiones } = moto;
    if (typeof modelo !== 'string' || !Array.isArray(revisiones)) {
        throw new TypeError(
            'moto.modelo debe ser string y ' +
            'moto.revisiones debe ser array'
        );
    }
    const valid = revisiones.every(n => typeof n === 'number' && !isNaN(n));
    if (!valid)
        throw new TypeError('revisiones debe contener números válidos (costos)');
    const promedioCosto = revisiones.length ?
        revisiones.reduce((a, b) => a + b, 0) / revisiones.length
        : 0;
    return { modelo: modelo.trim(), revisiones: revisiones, promedioCosto };
}

module.exports = { fusionarEspecificaciones, normalizarMoto };
