const mongoose = require('mongoose')
const url = process.env.mongoURL || `mongodb://localhost:27017/simple_blog`
const connection = mongoose.connect(url)

module.exports = connection;