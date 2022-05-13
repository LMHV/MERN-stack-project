import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({
    firstDestination: {
        type: String,
        required: true
        },
    secondDestination: {
        type: String, 
        required: true
    },
    thirdDestination: {
        type: String, 
        required: true
    },
    fourthDestination: {
        type: String, 
        required: true
    },
    firstDepartureDate: {
        type: String, 
        required: true
    },
    secondDepartureDate: {
        type: String, 
        required: true
    },
    thirdDepartureDate: {
        type: String, 
        required: true
    },
    fourthDepartureDate: {
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

export default mongoose.model('Package', PackageSchema);