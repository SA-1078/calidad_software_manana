function filtrarMotosDisponibles(motos) {
    return motos.filter(moto => moto.disponible);
}

module.exports = { filtrarMotosDisponibles }
