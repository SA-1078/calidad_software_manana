class Motocicleta {
    constructor(marca, modelo) {
        if (typeof marca !== 'string' || !marca.trim())
            throw new TypeError('marca inválida');
        if (!Number.isInteger(modelo) || modelo < 1900)
            throw new TypeError('modelo inválido');
        this.marca = marca.trim();
        this.modelo = modelo;
    }
}

function crearMotocicleta(marca, modelo) {
    return new Motocicleta(marca, modelo);
}

function esFechaVenta(valor) {
    return valor instanceof Date && !isNaN(valor.valueOf());
}

module.exports = { Motocicleta, crearMotocicleta, esFechaVenta };
