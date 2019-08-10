const mongoose = require('mongoose')

const ChicagoNameSchema = new mongoose.Schema({
    firstname: {
        type: [String]
        
    },
    lastname: {
        type: [String],
        
    }

});

module.exports = ChicagoName = mongoose.model('chicagoName', ChicagoNameSchema)

