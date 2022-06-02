import Flight from '../models/flight.js'

export const findFlights = async (req, res) => {
    const { origen, destino, fechaSalida, fechaRegreso, pasajeros } = req.body
    try {
        const cards = await Card.find({
            origen: origen,
            destino: destino,
            fechaSalida: fechaSalida,
            fechaRegreso: fechaRegreso,
            pasajeros: pasajeros
        })
        if (cards) {
            res.json(cards)
        } else {
            res.send({ status: 'No se encontraron vuelos con las siguientes caracteristicas.' })
        }
    } catch {
        console.log(error.message)
        return res.status(500).json({ error: error.message })
    }
}