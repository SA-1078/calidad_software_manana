function registrarMotoVenta(modelo, marca) {
    if (typeof modelo !== 'string' || typeof marca !== 'string') {
        throw new TypeError('Modelo y marca deben ser strings');
    }
    return {
        modelo,
        marca,
        disponible: true,
        registradoEn: new Date().toISOString()
    };
}

function obtenerDatosMoto(moto) {
    if (!moto || typeof moto !== 'object')
        throw new TypeError('Moto inválida');
    const { modelo, marca, disponible } = moto;
    return { modelo, marca, disponible };
}

function compararMotos(m1, m2) {
    if (!m1 || !m2) throw new TypeError('Motos inválidas');
    return m1.marca === m2.marca && m1.disponible === m2.disponible;
}

module.exports = {
    registrarMotoVenta,
    obtenerDatosMoto,
    compararMotos
};
