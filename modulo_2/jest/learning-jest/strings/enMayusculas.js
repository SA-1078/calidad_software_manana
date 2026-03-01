function enMayusculas(texto) {
    if (typeof texto !== 'string' || texto.trim().length === 0) { 
        throw new TypeError('texto inválido');
    }

    if (!texto || typeof texto !== 'string') { 
        throw new TypeError('texto inválido');
    }
    
    return texto.toUpperCase();
}
module.exports = { enMayusculas };