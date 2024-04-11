const express = require('express')
const { UserModel } = require('../models/user.model')
const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    const data = await UserModel.find()
    res.send({ msg: 'user router', data })
})

userRouter.post('/register', async (req, res) => {
    const data = new UserModel(req.body)
    await data.save()

    res.send({ data })
})

userRouter.post('/login', async (req, res) => {
    const { name, email, password } = req.body
    console.log(name, email, password)
    const user = await UserModel.findOne({ email })
    if (user) {
        if (user.password === password) {
            res.send({ status: true, token: 'token' })
        }
        else {
            res.send({ msg: 'wrong credential' })
        }
    }
    else {
        res.send({ msg: 'user not found' })
    }
})


module.exports = { userRouter }