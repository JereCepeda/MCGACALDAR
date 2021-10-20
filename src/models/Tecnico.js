const mongoose = require('mongoose');

const techSchema = new mongoose.Schema({
    certified_boiler: String
})

module.exports = mongoose.model('Technician', techSchema);