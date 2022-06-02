import mongoose from 'mongoose';

const FlightSchema = new mongoose.Schema({
    origen: {
        type: String,
        required: true
        },
    destino: {
        type: String, 
        required: true
    },
    fechaSalida: {
        type: String, 
        required: true
    },
    fechaRegreso: {
        type: String, 
        required: true
    },
    pasajeros: {
        type: String, 
        required: true
    }
})

export default mongoose.model('Flight', FlightSchema);