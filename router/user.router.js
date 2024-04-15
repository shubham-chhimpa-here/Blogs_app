const express = require('express')
const { UserModel } = require('../models/user.model')
const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    const data = await UserModel.find()
    res.send({ msg: 'user router', data })
})

userRouter.post('/register', async (req, res) => {

    const isExist = UserModel.find({email:req.body.email})
    console.log(isExist)
    const data = new UserModel(req.body)
    await data.save()

    res.send({ data })
})

userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    const user = await UserModel.findOne({ email })
    if (user) {
        console.log(user, req.body)
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