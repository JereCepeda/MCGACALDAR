const mongoose = require('mongoose');

const boilerTypeSchema = new mongoose.Schema({
    boilerType_id: mongoose.ObjectId,
    description: String
})

module.exports = mongoose.model('BoilerType', boilerTypeSchema)