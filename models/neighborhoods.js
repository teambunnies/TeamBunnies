const mongoose = require('mongoose')

const NeighborhoodSchema = new mongoose.Schema({
    place: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true,
        unique: true
    },
    lng: {
        type: String,
        required: true,
        unique: true
    },
    

});

module.exports = Neighborhood = mongoose.model('user', NeighborhoodSchema)