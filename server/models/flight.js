//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const FlightSchema = new mongoose.Schema({
    origin: {
        type: String,
        required: true
        },
    destination: {
        type: String, 
        required: true
    },
    departureDate: {
        type: String, 
        required: true
    },
    arriveDate: {
        type: String,
        required: true 
    },
    passengers: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Flight', FlightSchema);