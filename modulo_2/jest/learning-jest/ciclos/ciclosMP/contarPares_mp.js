function contarMotosModeloPar(modelos) {
    if (!Array.isArray(modelos)) {
        throw new TypeError("lista de modelos inválida");
    }
    let contador = 0;
    for (const modelo of modelos) {
        if (modelo % 2 === 0) contador++;
    }
    return contador;
}

module.exports = { contarMotosModeloPar };
