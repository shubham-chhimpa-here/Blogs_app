const express = require('express')
const { LogModel } = require('../models/logger.model')
const adminRouter = express.Router()

adminRouter.get('/', async (req, res) => {
    const data = await LogModel.find()
    res.send({ msg: 'admin router', data })
})



module.exports = {adminRouter}
