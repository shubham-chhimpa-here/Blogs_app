const mongoose = require('mongoose')

const logSchema = mongoose.Schema({
    time: Date,
    ip: String,
    method: String,
    url: String
})

const LogModel = mongoose.model('log', logSchema)

module.exports = { LogModel }