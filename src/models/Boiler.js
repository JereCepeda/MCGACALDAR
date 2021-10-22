const mongoose = require('mongoose');


const boilerSchema = new mongoose.Schema({
    operating_pressure: String,
    capacity: String,
    trademark: String,
    boilerType : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'boilerType'
    },
})
module.exports = mongoose.model('Boiler',boilerSchema);