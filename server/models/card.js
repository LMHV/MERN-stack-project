//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const CardSchema = new mongoose.Schema({
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
    price: {
        type: Number,
        required: true
    },
    photoURL: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

export default mongoose.model('Card', CardSchema);