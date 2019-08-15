const mongoose = require('mongoose')

const ChicagoNameSchema = new mongoose.Schema({
    
    firstnames: {
        type: [String]
        
    },
    lastnames: {
        type: [String]
        
    }

});

module.exports = ChicagoName = mongoose.model('chicagoName', ChicagoNameSchema)
