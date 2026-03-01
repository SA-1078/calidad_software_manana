function sumarCostosMantenimiento(costosA, costosB) {
    return {
        repuestos: costosA.repuestos + costosB.repuestos,
        manoDeObra: costosA.manoDeObra + costosB.manoDeObra
    };
}

module.exports = { sumarCostosMantenimiento }
