const mongoose = require('mongoose');

const techSchema = new mongoose.Schema({
    certified_boiler: Number
})

module.exports = mongoose.model('Technician', techSchema);