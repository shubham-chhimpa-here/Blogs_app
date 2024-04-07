const express = require('express')
const { UserModel } = require('../models/user.model')
const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    const data = await UserModel.find()
    res.send({ msg: 'user router', data })
})

userRouter.post('/add', async (req, res) => {
    const data = new UserModel(req.body)
    await data.save()

    res.send({ data })
})

module.exports = { userRouter }